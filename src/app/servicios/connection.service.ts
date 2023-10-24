import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { empleado, filtroSucursales } from './Empleado';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {
  Api: String = 'http://localhost/olimpus-gym/';

  constructor(private http: HttpClient){}

  //metodo alta colaborador - admin - insertar nuevo empleado
  agregarEmpleado(datos: empleado):Observable<any>{
    let headers: any = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    return this.http.post(this.Api+"?addEmpleado", datos, {headers});
  }

  //metodo consultar sucursales gym - usado en alta colaborador - admin
  formAltaPersonal():Observable<any>{
    let headers: any = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    return this.http.get(this.Api+"?nombreGym");
  }
  
  
  //metodo traer datos filtrados - sucursales 
  filtrarSuc(filtros: filtroSucursales):Observable<any> {
    let headers: any = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    return this.http.post(this.Api+"?filtrarSucursales", filtros, {headers});
  }

}