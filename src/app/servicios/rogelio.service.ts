import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { gimnasio, mensaje } from './gimnasio';

@Injectable({
    providedIn: 'root'
  })

export class RogelioService {
    Api_server: String = 'https://olympus.arvispace.com/conPrincipal/sucsadmin.php';

    constructor(private http: HttpClient){}

    //Metodo traer sucursales - gimnasios admin
    sucursaleslista():Observable<any>{
        return this.http.get<gimnasio>(this.Api_server+"?lista");
    }

    //metodo borrar sucursal - gimnasios admin
    borrarSucursal(id: any):Observable<any>{
        return this.http.get<mensaje>(this.Api_server+"?borrar="+id);
    }

    //metodo alta sucursal - gimnasios admin
    
}