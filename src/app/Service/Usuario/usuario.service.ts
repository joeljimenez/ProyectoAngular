import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { url } from '../../URL/URL';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario.models';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
     'token': localStorage.getItem('token')
  })
};
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient , private ruta:Router) { }
  
  //traer todo
  get_all_user(desde:any) {
    const url_api = url + `/allUser?desde=${desde}`;
    return this.http.get(url_api)
      .pipe(
        catchError(this.handleError('Usuario')));
  }

 



  //traer un usuario
  get_one_usuario(id) {
     const url_api = url + `/user/${id}`;
     return this.http.get(url_api)
       .pipe(
         catchError(this.handleError('Usuario')));
   }

   // actualizar usuario
   update_user(usuario: Usuario , id) {
     const url_api = url + `/user/updateUser/${id}`;
     return this.http.put(url_api, usuario, httpOptions)
       .pipe(
         catchError(this.handleError('Login')));
   }



   crear_usuario(usuario: Usuario) {
    const url_api = url + '/user/createUser';
    return this.http.post(url_api, usuario, httpOptions)
      .pipe(
        catchError(this.handleError('Login')));
  }


  //Perfil

  update_imagen(imagen: File , id) {
    
    this.subirArchivo(imagen , 'usuarios',id)          
    .then( (resp: any) => {

  this.ruta.navigate(['/Perfil_usuario']);
     })
    .catch( resp => {
      console.log( resp );
    }) ;
 
  }


    //imagen

    update_imagen_user(imagen: File , id) {
    
      this.subirArchivo(imagen , 'usuarios',id)          
      .then( (resp: any) => {
  
    this.ruta.navigate(['/usuarios']);
       })
      .catch( resp => {
        console.log( resp );
      }) ;
   
    }


  get_usuario_id(id) {
    const url_api = url + `/user/${id}`;
    return this.http.get(url_api)
      .pipe(
        catchError(this.handleError('productos')));
  }

  delete(id) {
    const url_api = url + `/user/delete/${id}`;
    console.log(url_api);
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


  // subir imagen
  subirArchivo( archivo: File, tipo: string, id: string ) {

    return new Promise( (resolve, reject ) => {

      let formData = new FormData();
      let xhr = new XMLHttpRequest();
      formData.append( 'archivo', archivo, archivo.name );
      console.log(formData);
      xhr.onreadystatechange = function() {
        
        if ( xhr.readyState === 4 ) {
          
          if ( xhr.status === 200 ) {
            console.log( 'Imagen subida' );
          
            resolve( JSON.parse( xhr.response ) );
          } else {
            console.log( 'Fallo la subida' );
            reject( xhr.response );
          }
          
        }
      };
      
      let url_serrvicio = url + '/upload/' + tipo + '/' + id;
     

      xhr.open('PUT', url_serrvicio, true );
     // xhr.setRequestHeader("Content-Type", 'application/json');
        xhr.setRequestHeader("token", localStorage.getItem('token'));

      xhr.send( formData );

    });




  }
}
