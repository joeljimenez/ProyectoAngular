import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { url } from '../../URL/URL';
import { Usuario } from '../../models/usuario.models';
import { Router } from '@angular/router';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
    // 'Authorization': 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public token: string;
  constructor(private http: HttpClient, private _route: Router) {
    if (localStorage.getItem('token')) {
      this.token = localStorage.getItem('token');
    } else {
      this.token = '';
    }

  }

  salir() {
    this.token = '';
    localStorage.removeItem('id');
    localStorage.removeItem('nombre');
    localStorage.removeItem('token');
    this._route.navigate(['/Session']);
  }



  Login(login: Usuario) {
    const url_api = url + '/api/login';
    return this.http.post(url_api, login, httpOptions)
      .pipe(
        catchError(this.handleError('Login')));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
  private log(message: string) {
    console.log(message);
  }

  estaLogueado() {
    this.token = localStorage.getItem('token');
    return (this.token.length > 3) ? true : false;
  }

}
