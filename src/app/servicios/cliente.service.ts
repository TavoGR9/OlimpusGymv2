import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from './Cliente';


@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  URLServices: String = "http://localhost/plan/registro.php";
  constructor( private http: HttpClient) { }

  agregarCliente(datosCliente:Cliente):Observable<any>{
    console.log("aca llega");
    return this.http.post(this.URLServices+"?insertar=1",datosCliente);
  }

  credenciales(data:string, password:string){
    let headers: any = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let parameters = 'data=' + data + '&password=' + password;
    return this.http.post(this.URLServices + 'login.php', parameters, { headers });
  }
}
