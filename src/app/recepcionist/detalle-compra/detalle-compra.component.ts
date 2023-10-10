import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ConnectionService } from 'src/app/servicios/connection.service';

@Component({
  selector: 'app-detalle-compra',
  templateUrl: './detalle-compra.component.html',
  styleUrls: ['./detalle-compra.component.css']
})
export class DetalleCompraComponent {
  hide = true;
  form: FormGroup;

  constructor (private fb: FormBuilder,
    private router: Router,
    private http: ConnectionService,
    private toastr: ToastrService ){
    this.form = this.fb.group({
      data: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  navegarPagina(url: String): void {
    //console.log("Va a navegar", url);
    this.router.navigate([ url ]);
  }
}

