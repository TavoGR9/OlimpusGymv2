import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {
  URLServices = "http://localhost/inmoplusMovil/servicios/";
  constructor( private http: HttpClient) { }

  password_change(oldPassword:string, newPassword:string){
    let headers: any = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let parameters = 'oldPassword=' + oldPassword + '&newPassword=' + newPassword;
    return this.http.post(this.URLServices + 'Movil_password_ch.php', parameters, { headers });
  }
}
