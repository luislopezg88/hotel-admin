
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
//import { URL_SERVICIOS } from '../../config/config';



@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private baseUrl: string;
  private headers = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(
    private http: HttpClient,
    public router: Router
    ) { 
    this.baseUrl = `${environment.apiUrl}:${environment.port}`;
  }

  registerUser( userName: string, email: string, password: string): Observable<any> {
    console.log('se envia al servicio');
    console.log("Datos llegan al servicio", userName, email, password);
    return this.http.post<any>(this.baseUrl + '/api/auth/signup', {
        userName,
        email,
        password
        
    }, {
        headers: this.headers
    });
  }

  loginUser(email: string, password: string): Observable<any>{

    return this.http.post<any>(this.baseUrl + '/api/auth/signin', {
      email,
      password
      
  }, {
      headers: this.headers
  });
  } 

  estasLogeado(): any {

   console.log(localStorage.getItem('token')); 
   let tokenUser: string | null = localStorage.getItem('token');

   return (tokenUser?.length ?? 0 > 5) ? true : false;
   
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('usuario');
    this.router.navigate(['/login']);
  }





}
