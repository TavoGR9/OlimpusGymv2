import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { empleado } from './Empleado';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {
  Api: String = 'http://localhost/olimpus-gym/';

  constructor(private http: HttpClient){}

  agregarEmpleado(datos: empleado):Observable<any>{
    let headers: any = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    return this.http.post(this.Api+"?addEmpleado", datos, {headers});
  }

  formAltaPersonal():Observable<any>{
    let headers: any = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    return this.http.get(this.Api+"?nombreGym");
  }

}