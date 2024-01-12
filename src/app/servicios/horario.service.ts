import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { horario } from './horario';

@Injectable({
  providedIn: 'root'
})
export class horarioService {
  private apiUrl = 'http://localhost/plan/tablaHora.php'; // Cambia la URL a la de tu servicio PHP
  APIHorario: string = 'https://olympus.arvispace.com/conPrincipal/horario.php'

  constructor(private http: HttpClient) {}

  getValorJSON(jsonPath: string, idGimnasio: number): Observable<any> {
    const params = {
      jsonPath: jsonPath,
      idGimnasio: idGimnasio.toString()
    };

    return this.http.get<any>(this.apiUrl, { params });
  }

  
  obternerHorario(){
    return this.http.get(this.APIHorario);
  }

  // Angular service method
  agregarHorario(datosHorario: horario):Observable<any>{
    console.log("si")
    return this.http.post(this.APIHorario+"?insertar=1", datosHorario);
  }

 // Cambia el servicio para que el observable emita un arreglo de Horario

 actualizarHorario(id: any, datosPlan: any): Observable<any> {
  console.log("aca si llega");
  return this.http.post(`${this.APIHorario}?actualizar=${id}`, datosPlan, { headers: { 'Content-Type': 'application/json' }, responseType: 'text' });
}


  consultarHorario(id:any):Observable<any>{
    return this.http.get(this.APIHorario+"?consultar="+id);
  }

  borrarHorario(id:any):Observable<any>{
    console.log("si entro aca") 
    return this.http.get(this.APIHorario+"?borrar="+id)
    //this.message = "¡Error al eliminar!, Restricción en la base de datos";
  }
}
