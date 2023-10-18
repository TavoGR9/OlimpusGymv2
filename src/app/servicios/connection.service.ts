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
    return this.http.get(this.Api+"?nombreGym", {headers});
  }

  /*URLServices = "http://localhost/olimpus-gym/";
  constructor( private http: HttpClient) { }

  credenciales(data:string, password:string){
    let headers: any = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let parameters = 'data=' + data + '&password=' + password;
    return this.http.post(this.URLServices + 'login.php', parameters, { headers });
  }*/
}
