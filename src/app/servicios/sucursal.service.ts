import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { sucursal } from './sucursal';

@Injectable({
  providedIn: 'root'
})
export class SucursalService {
  API: string = 'https://olympus.arvispace.com/conPrincipal/gimnasio.php';

  constructor(private http: HttpClient) {}

  getSucursales(): Observable<sucursal[]> {
    return this.http.get(this.API).pipe(
      map((data: any) =>
        data.map((item: any) => {
          const s = new sucursal();
          s.idGimnasio = item.idGimnasio;
          s.nombreGym = item.nombreGym;
          s.codigoPostal = item.codigoPostal;
          s.estado = item.estado;
          s.ciudad = item.ciudad;
          s.colonia = item.colonia;
          s.calle = item.calle;
          s.numExt = item.numExt;
          s.numInt = item.numInt;
          s.telefono = item.telefono;
          s.tipo = item.tipo;
          s.Franquicia_idFranquicia = item.Franquicia_idFranquicia;
          s.horarios = item.horarios;
          s.casilleros = item.casilleros;
          s.estacionamiento = item.estacionamiento;
          s.energia = item.energia;
          s.bicicletero = item.bicicletero
          
          return s;
        })
      )
    );
  }
}
