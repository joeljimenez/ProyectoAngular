import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { url } from '../../URL/URL';
import { Router } from '@angular/router';
import { Categoria } from '../../models/categoria.model';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
     'token': localStorage.getItem('token')
  })
};

@Injectable({
  providedIn: 'root'
})
export class AutosService {

  
  constructor(private http: HttpClient , private ruta:Router) { }

  get_autos() {
    const url_api = url + '/autos/all';
    return this.http.get(url_api)
      .pipe(
        catchError(this.handleError('productos')));
  }

  get_auto_id(id) {
    const url_api = url + `/categories/${id}`;
    return this.http.get(url_api)
      .pipe(
        catchError(this.handleError('productos')));
  }


  create_autos(categoria: Categoria) {
    const url_api = url + '/categories/create';
    return this.http.post(url_api, categoria, httpOptions)
      .pipe(
        catchError(this.handleError('Login')));
  }

  update_auto(producto: Categoria , id) {
    const url_api = url + `/categories/update/${id}`;
    return this.http.put(url_api, producto, httpOptions)
      .pipe(
        catchError(this.handleError('Login')));
  }


  delete_auto(id) {
    const url_api = url + `/categories/delete/${id}`;
    return this.http.delete(url_api, httpOptions)
      .pipe(
        catchError(this.handleError('productos')));
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

}
