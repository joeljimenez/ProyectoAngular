import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { url } from '../../URL/URL';
import { Router } from '@angular/router';
import { AutoModel } from 'src/app/models/autos.models';


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


  constructor(private http: HttpClient, private ruta: Router) { }

  get_autos() {
    const url_api = url + '/autos/all';
    return this.http.get(url_api)
      .pipe(
        catchError(this.handleError('productos')));
  }

  get_auto_id(id) {
    const url_api = url + `/autos/${id}`;
    return this.http.get(url_api)
      .pipe(
        catchError(this.handleError('productos')));
  }


  create_autos(auto: AutoModel) {
    const url_api = url + '/autos/create';
    return this.http.post(url_api, auto, httpOptions)
      .pipe(
        catchError(this.handleError('Login')));
  }

  update_auto(auto: AutoModel, id) {
    console.log(auto);
    const url_api = url + `/autos/update/${id}`;
    return this.http.put(url_api, auto, httpOptions)
      .pipe(
        catchError(this.handleError('Login')));
  }


  delete_auto(id) {
    const url_api = url + `/auto/delete/${id}`;
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


  update_imagen(imagen: File, id) {
    this.subirArchivo(imagen, 'autos', id)
      .then((resp: any) => {

        console.log(resp);
        this.ruta.navigate(['/autos']);


      })
      .catch(resp => {
        console.log(resp);
        if (resp.err.causa == 'token') {
          this.ruta.navigate(['/Session']);
          localStorage.removeItem('token');
        }
      });

  }

  // subir imagen
  subirArchivo(archivo: File, tipo: string, id: string) {
    console.log(archivo, tipo, id);
    return new Promise((resolve, reject) => {

      let formData = new FormData();
      let xhr = new XMLHttpRequest();
      formData.append('archivo', archivo, archivo.name);
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


}
