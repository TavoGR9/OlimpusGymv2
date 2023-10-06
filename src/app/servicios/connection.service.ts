import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {
  URLServices = "http://localhost/inmoplusMovil/servicios/";
  constructor( private http: HttpClient) { }

  credenciales(user_data:string, Password:string){
    let headers: any = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let parameters = 'oldPassword=' + user_data + '&newPassword=' + Password;
    return this.http.post(this.URLServices + 'Movil_password_ch.php', parameters, { headers });
  }
}
