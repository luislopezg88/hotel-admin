import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HotelesService {
  totalHoteles: number = 0;
  
  private baseUrl: string;
  private headers = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(
    private http: HttpClient,
    public router: Router
  ) { 
    this.baseUrl = `${environment.apiUrl}:${environment.port}`;
  }

  registerHotel(code: string, address: string) {
    console.log('se envia al servicio');
    console.log("Datos llegan al servicio", code, address);

    return this.http.post<any>(this.baseUrl + '/api/buildings', {
      code,
      address
      
  }, {
      headers: this.headers
  });
  }


  listaHoteles(): Observable<any> {
    return this.http.get(this.baseUrl + '/api/buildings')
      
  }

  deleteHotel(id: string): Observable<any> {
    return this.http.delete<any>(this.baseUrl + '/api/buildings/' + id, {
      
    });
 }

}
