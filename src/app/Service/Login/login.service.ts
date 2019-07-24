import { Injectable} from '@angular/core'; 
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs'; 
import { url } from '../../URL/URL';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor( private http:HttpClient) { }

  Login(login: any) {
    const url_api = url + '/api/login';
    return this.http.post(url_api, login, httpOptions)
    .pipe(
      catchError(this.handleError('Login')));
      }

      private handleError<T> (operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
          console.error(error);
           this.log(`${operation} failed: ${error.message}`);
           return of(result as T);
        };
      }
      private log(message: string) {
    console.log(message);
      }

}
