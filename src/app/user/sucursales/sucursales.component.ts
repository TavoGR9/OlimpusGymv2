
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ConnectionService } from 'src/app/servicios/connection.service';


@Component({
  selector: 'app-sucursales',
  templateUrl: './sucursales.component.html',
  styleUrls: ['./sucursales.component.css']
})

export class SucursalesComponent {
  sucursales: any;

  form: FormGroup;
  constructor (private http: ConnectionService, private fb: FormBuilder, ){
    this.form = this.fb.group({
      casilleros: [false],
      estacionamiento: [false],
      bicicletero: [false],
      energia: [false]
    })
  }

  onNombreChange(){
    console.log(this.form.value);
     
    this.http.filtrarSuc(this.form.value).subscribe({
      next: (resultData) => {
        
        console.log(resultData);
        this.sucursales = resultData;               
      },
      error: (error) => {
        console.error(error);
      }
    })
  }

}
