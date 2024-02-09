import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PlanService } from 'src/app/servicios/plan.service';
import { GimnasioService } from 'src/app/servicios/gimnasio.service';
import { Router, ActivatedRoute } from '@angular/router';
import { TestService } from 'src/app/servicios/test.service';
import { MensajeEmergentesComponent } from 'src/app/user/mensaje-emergentes/mensaje-emergentes.component';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-alta-categoria',
  templateUrl: './alta-categoria.component.html',
  styleUrls: ['./alta-categoria.component.css']
})
export class AltaPlanComponent implements OnInit {
  formPlan: FormGroup;
  servicios: any[] = [];
  prices: any[] = [];
  totalPlanPersolnalized: number = 0;
  totalPay: number = 0;
  elID: any;
  gymName: any;

  constructor(
    public dialogo: MatDialogRef<AltaPlanComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public formulario: FormBuilder,
    private planService: PlanService, 
    private GimnasioService: GimnasioService,
    private activeRoute: ActivatedRoute,
    private testService: TestService, 
    private router: Router,
    public dialog: MatDialog
  ) {

    this.formPlan = this.formulario.group({
      titulo: ['Plan personalizado', [Validators.required, Validators.pattern(/^[^\d!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]+$/u)]],
      detalles: ['Este es un plan personalizado'],
      duracion: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
      servicioseleccionado: [[], Validators.required],
      precio: [''],
      status: ['1', [Validators.pattern(/^\d+$/)]],
      tipo_membresia: [2, [Validators.required, Validators.pattern(/^\d+$/)]],
      Gimnasio_idGimnasio: [this, Validators.required],
    });
   
  }

  ngOnInit(): void {
    this.GimnasioService.getServicesForId(this.data.id).subscribe(respuesta => {
      if(respuesta){
        this.servicios = respuesta;
      }
    });
   
  }

  isFieldInvalid(field: string, error: string): boolean {
    const control = this.formPlan.get(field);
    return control?.errors?.[error] && (control?.touched ?? false);  
  }
  
  validarFormulario(){
    if(this.formPlan.invalid){
      Object.values(this.formPlan.controls).forEach(control => {
        console.log(control.errors); // Imprime los errores de cada control
        control.markAsTouched();
      });
    }
    else{
      this.formPlan.setValue({
        titulo: this.formPlan.value.titulo,
        duracion: this.formPlan.value.duracion,
        precio: this.formPlan.value.precio,
        detalles: this.formPlan.value.detalles,
        servicioseleccionado: this.formPlan.value.servicioseleccionado,
        status: this.formPlan.value.status,
        tipo_membresia: 2,
        Gimnasio_idGimnasio: this.data.id,
      });
      this.planService.agregarPlan(this.formPlan.value).subscribe(respuesta => {
        if(respuesta){
          this.dialog.open(MensajeEmergentesComponent, {
            data: `Tu plan se ha creado con éxito. Por favor, continúa con el siguiente paso en tu proceso.`,
          })
          .afterClosed()
          .subscribe((cerrarDialogo: Boolean) => {
            if (cerrarDialogo) {
              this.dialogo.close(true);
             // this.router.navigate(['/registro', respuesta.id]);
             this.router.navigate(['/registro', respuesta.id, respuesta.precio, respuesta.titulo]);
            } else {
              // Hacer algo si no se quiere cerrar el diálogo
            }
          });
           
        }
      });
    }
  }

  setPrice(servicios: any[]) {
    this.prices = [];
    if (servicios) {
        servicios.forEach(servicio => {
            this.prices.push(servicio.precio_unitario);
        });

        if (this.formPlan.value.duracion && this.formPlan.value.servicioseleccionado) {
            this.totalPlanPersolnalized = this.prices.reduce((a, b) => a + b, 0);
            this.totalPay = this.totalPlanPersolnalized * this.formPlan.value.duracion;

            setTimeout(() => {
                const precioControl = this.formPlan.get('precio');
                if (precioControl) {
                    precioControl.setValue(this.totalPay);
                }
            });
        }
    } else {
    }
}
cancelar(){
  this.dialogo.close(true);
}
}
