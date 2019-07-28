import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { url } from '../../URL/URL';
import { Router } from '@angular/router';
import { Productos } from 'src/app/models/producto.models';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
     'token': localStorage.getItem('token')
  })
};

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  crear_producto(producto: Productos) {
    const url_api = url + '/productos/create';
    return this.http.post(url_api, producto, httpOptions)
      .pipe(
        catchError(this.handleError('Login')));
  }

  update_producto(producto: Productos , id) {
    const url_api = url + `/productos/producto/${id}`;
    return this.http.put(url_api, producto, httpOptions)
      .pipe(
        catchError(this.handleError('Login')));
  }


  get_producto() {
    const url_api = url + '/productos/all';
    return this.http.get(url_api)
      .pipe(
        catchError(this.handleError('productos')));
  }

  get_producto_id(id) {
    const url_api = url + `/productos/${id}`;
    return this.http.get(url_api)
      .pipe(
        catchError(this.handleError('productos')));
  }

  delete(id) {
    const url_api = url + `/productos/delete/${id}`;
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
