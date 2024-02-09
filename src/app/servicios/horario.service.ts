import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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

  consultarHorario(id:any):Observable<any>{
    return this.http.get(this.APIHorario+"?consultar="+id);
  }
}
