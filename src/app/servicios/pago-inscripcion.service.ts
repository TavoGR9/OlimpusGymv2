import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PagoInscripcionService {

  URLServices: string = "https://olympus.arvispace.com/conPrincipal/formaPago.php/"; //http://localhost/plan/registro.php/ https://olympus.arvispace.com/conPrincipal/registro.php
  constructor( private http: HttpClient) { }
  
  consultarDataPago(id:any):Observable<any>{
    return this.http.get(this.URLServices+"?consultar="+id);
  }
  
}
