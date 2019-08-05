import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { url } from '../../URL/URL';
import { Router } from '@angular/router';
import { Categoria } from '../../models/categoria.model';
import { Marcas } from 'src/app/models/marcas.model';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
     'token': localStorage.getItem('token')
  })
};

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  constructor(private http: HttpClient , private ruta:Router) { }

  get_categorias() {
    const url_api = url + '/categories/all';
    return this.http.get(url_api)
      .pipe(
        catchError(this.handleError('productos')));
  }

  get_categoria_id(id) {
    const url_api = url + `/categories/${id}`;
    return this.http.get(url_api)
      .pipe(
        catchError(this.handleError('productos')));
  }


  crear_categoria(categoria: Categoria) {
    const url_api = url + '/categories/create';
    return this.http.post(url_api, categoria, httpOptions)
      .pipe(
        catchError(this.handleError('Login')));
  }

  update_Categoria(producto: Categoria , id) {
    const url_api = url + `/categories/update/${id}`;
    return this.http.put(url_api, producto, httpOptions)
      .pipe(
        catchError(this.handleError('Login')));
  }


  delete(id) {
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
  update_imagen(imagen: File, id) {
    
    this.subirArchivo(imagen, 'categoria', id)
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

  update_imagen_marcas(imagen: File, id) {
    
    this.subirArchivo(imagen, 'marcas', id)
      .then((resp: any) => {


        this.ruta.navigate(['/marcas']);


      })
      .catch(resp => {
        console.log(resp);
        if (resp.err.causa == 'token') {
          this.ruta.navigate(['/Session']);
          localStorage.removeItem('token');
        }
      });

  }

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




  // marcas
  get_marcas() {
    const url_api = url + '/marcas/all';
    return this.http.get(url_api)
      .pipe(
        catchError(this.handleError('marcas')));
  }

  create_marcas(data) {
    const url_api = url + '/marcas/create';
    return this.http.post(url_api , data ,httpOptions)
      .pipe(
        catchError(this.handleError('marcas')));
  }


  get_marcas_id(id) {
    const url_api = url + '/marcas/'+id;
    return this.http.get(url_api)
      .pipe(
        catchError(this.handleError('marcas')));
  }

  update_marcas(marca: Marcas , id) {
    const url_api = url + `/marcas/update/${id}`;
    return this.http.put(url_api, marca, httpOptions)
      .pipe(
        catchError(this.handleError('Login')));
  }

  delete_marca(id) {
    const url_api = url + `/marcas/delete/${id}`;
    return this.http.delete(url_api, httpOptions)
      .pipe(
        catchError(this.handleError('productos')));
  }


}
