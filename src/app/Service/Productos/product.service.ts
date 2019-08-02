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
  mensaje: String;
  constructor(private http: HttpClient, private ruta: Router) { }

  crear_producto(producto: Productos) {
    const url_api = url + '/productos/create';
    return this.http.post(url_api, producto, httpOptions)
      .pipe(
        catchError(this.handleError('Login')));
  }

  update_producto(producto: Productos, id) {
    const url_api = url + `/productos/producto/${id}`;
    return this.http.put(url_api, producto, httpOptions)
      .pipe(
        catchError(this.handleError('Login')));
  }

  //imagen

  update_imagen(imagen: File, id) {
    const url_api = url + `/upload/productos/${id}`;
    this.subirArchivo(imagen, 'productos', id)
      .then((resp: any) => {


        this.ruta.navigate(['/index_productos']);


      })
      .catch(resp => {
        console.log(resp);
        if (resp.err.causa == 'token') {
          this.ruta.navigate(['/Session']);
          localStorage.removeItem('token');
        }
      });

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



  get_imagen_id(id) {
    const url_api = url + `/productos/showImagen/${id}`;
    return this.http.get(url_api)
      .pipe(
        catchError(this.handleError('productos')));
  }


  delete_imagen(id) {
    const url_api = url + `/imagen/delete/${id}`;
    return this.http.delete(url_api, httpOptions)
      .pipe(
        catchError(this.handleError('productos')));
  }



  // subir imagen
  subirArchivo(archivo: File, tipo: string, id: string) {

    return new Promise((resolve, reject) => {

      let formData = new FormData();
      let xhr = new XMLHttpRequest();
      formData.append('archivo', archivo, archivo.name);
      console.log(formData);
      xhr.onreadystatechange = function () {

        if (xhr.readyState === 4) {

          if (xhr.status === 200) {
            console.log('Imagen subida');

            resolve(JSON.parse(xhr.response));
          } else {
            console.log('Fallo la subida');
            reject(xhr.response);
          }

        }
      };

      let url_serrvicio = url + '/upload/' + tipo + '/' + id;


      xhr.open('PUT', url_serrvicio, true);
      // xhr.setRequestHeader("Content-Type", 'application/json');
      xhr.setRequestHeader("token", localStorage.getItem('token'));

      xhr.send(formData);

    });

  }



  /*===========================================================
  =========================================================== */
  subirArchivoMasivo(archivo: File, tipo: string, id: string) {
       
      
     
    return new Promise((resolve, reject) => {

      let formData = new FormData();
      let xhr = new XMLHttpRequest();
      for (let index = 0; index < archivo.length; index++) {
      
        formData.append('archivo',  archivo[index]);
      }
     
      xhr.onreadystatechange = function () {

        if (xhr.readyState === 4) {

          if (xhr.status === 200) {
            console.log('Imagen subida');
            resolve(JSON.parse(xhr.response));
          } else {
            console.log('Fallo la subida');
            reject(xhr.response);
          }

        }
      };

      let url_serrvicio = url + '/uploadMasiva/' + id;

      console.log(url_serrvicio);
      xhr.open('POST', url_serrvicio, true);
      // xhr.setRequestHeader("Content-Type", 'application/json');
      xhr.setRequestHeader("token", localStorage.getItem('token'));

      xhr.send(formData);

    });

  }
}
