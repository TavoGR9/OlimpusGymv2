import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { plan } from './plan';

@Injectable({
  providedIn: 'root'
})
export class GimnasioService {

  API: string = 'http://localhost/plan/franquicia.php'
  constructor(private clienteHttp:HttpClient) {
  }

  obternerPlan(){
    return this.clienteHttp.get(this.API)
  }
}
