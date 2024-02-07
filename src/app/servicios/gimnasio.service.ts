import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError, catchError, map, tap } from 'rxjs';
import { gimnasio } from './gimnasio';

@Injectable({
  providedIn: 'root'
})
export class GimnasioService {

  API: string = 'http://localhost/plan/gimnasio.php'
  APISERVICE: string = 'https://olympus.arvispace.com/puntoDeVenta/conf/serviciosGym.php';

  constructor(private clienteHttp:HttpClient) {
  }

  obternerPlan(){
    return this.clienteHttp.get(this.API);
  }

  // Angular service method
  agregarSucursal(datosGym: gimnasio):Observable<any>{
    return this.clienteHttp.post(this.API+"?insertar=1", datosGym);
  }

  actualizarPlan(id:any,datosPlan:any):Observable<any>{
    return this.clienteHttp.post(this.API+"?actualizar="+id,datosPlan);
  } 

  consultarPlan(id:any):Observable<any>{
    return this.clienteHttp.get(this.API+"?consultar="+id);
  }

  borrarSucursal(id:any):Observable<any>{
    console.log("si entro aca") 
    return this.clienteHttp.get(this.API+"?borrar="+id)
    //this.message = "¡Error al eliminar!, Restricción en la base de datos";
  }

  getServicesForId(id: any): Observable<any> {
    return this.clienteHttp.post(this.APISERVICE, { id: id });
  }

}
