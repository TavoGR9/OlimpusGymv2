import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PagoInscripcionService {

  URLServices: string = "http://localhost/plan/formaPago.php/"; //http://localhost/plan/registro.php/ https://olympus.arvispace.com/conPrincipal/registro.php
  constructor( private http: HttpClient) { }
  
  obternerDataPagos(){
    return this.http.get(this.URLServices);
  }
}
