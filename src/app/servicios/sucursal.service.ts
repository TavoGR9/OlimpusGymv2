import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { sucursal } from './sucursal';


@Injectable({
  providedIn: 'root'
})
export class SucursalService {

  API: string = 'http://localhost/sucursales'
  constructor(private http: HttpClient, private sucursalservice: SucursalService) { }


  //consultar datos de la tabla de sucursale
  getSucursales(): Observable<sucursal[]>{ 
    return this.http.get(this.API).pipe(
      map((data: any) => data.map((item: any) => new sucursal(item.idGimnasio, item.nombre, item.direccion, item.telefono, item.tipo, item.Franquicia_idFranquicia)))
    );
  }


}
