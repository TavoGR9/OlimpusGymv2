import { Component, ElementRef, ViewChild, OnInit} from '@angular/core';
import { plan } from 'src/app/servicios/plan';
import { PlanService } from 'src/app/servicios/plan.service';
import { Router, ActivatedRoute } from '@angular/router';
import { TestService } from 'src/app/servicios/test.service';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { GimnasioService } from 'src/app/servicios/gimnasio.service';
import { AltaPlanComponent } from '../alta-plan/alta-categoria.component';
import { MatDialog } from "@angular/material/dialog";

@Component({
  selector: 'app-membresias',
  templateUrl: './membresias.component.html',
  styleUrls: ['./membresias.component.css']
})
export class MembresiasComponent implements OnInit{
  plan: any;
  membresias: any[] = []; // Declarar el tipo de elID como string o nulo
  elID: any;
  gymName: any;
  formPlan: FormGroup;
  servicios: any[] = [];
  prices: any[] = [];
  totalPlanPersolnalized: number = 0;
  servicioSeleccionado: any[] = [];
  totalPay: number = 0;

constructor(
  private activeRoute: ActivatedRoute,
  private router: Router, 
  private planService: PlanService, 
  private testService: TestService, 
  private formulario: FormBuilder,
  private GimnasioService: GimnasioService,
  public dialog: MatDialog
  ) 
  {
  this.elID = this.activeRoute.snapshot.paramMap.get('id');
  this.gymName = this.activeRoute.snapshot.paramMap.get('idName');

  this.testService.idGym=this.elID;
  this.testService.nameGym=this.gymName;
   
    
  if ( this.elID) { // Validar si el ID es nulo
    this.planService.obternerPlan().subscribe(
      (membresias: any) => {
        // Filtrar las membresías para obtener solo las del gimnasio con el ID correspondiente
        this.membresias = membresias.filter((item:any) => item.Gimnasio_idGimnasio === this.elID);
        const nombresMembresias = this.membresias.map((membresia: any) => membresia.titulo); // Reemplaza 'nombre' con el nombre de la propiedad que desees imprimir
      },
      (error) => {
      }
    );
  }

  this.formPlan = this.formulario.group({
    titulo: ['Plan personalizado', [Validators.required, Validators.pattern(/^[^\d!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]+$/u)]],
    detalles: ['Este es un plan personalizado', [Validators.required, Validators.pattern(/^[^\d!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]+$/u)]],
    duracion: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
    servicioseleccionado: [[], Validators.required],
    precio: [''],
    status: ['1', [Validators.pattern(/^\d+$/)]],
    tipo_membresia: [2, [Validators.required, Validators.pattern(/^\d+$/)]],
    Gimnasio_idGimnasio: [this, Validators.required],
  });
}

@ViewChild('planesSection') planesSection!: ElementRef;

scrollToPlanes() {
  if (this.planesSection) {
    this.planesSection.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }
}

navegarPagina(url: String): void {
  //console.log("Va a navegar", url);
  this.router.navigate([ url ]);
}

altaPlan(): void {
  const dialogRef = this.dialog.open(AltaPlanComponent, {
    data: {
      id: this.elID,
      name: this.gymName
    },
    width: '100%',
    height: '90%',
  });
}

  ngOnInit(): void {
    this.planService.obternerPlan().subscribe(respuesta=>{
    this.plan=respuesta;
    });

    this.GimnasioService.getServicesForId(this.elID).subscribe(respuesta => {
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
        Gimnasio_idGimnasio: this.elID,
      });

      this.planService.agregarPlan(this.formPlan.value).subscribe(respuesta => {
        if(respuesta){
         
        }
      });
    }
  }

  setPrice(servicios: any[]){
    this.prices = []; // Vacía el array prices
    if(servicios){
      servicios.forEach(servicio => {
        //console.log("el precio de esta es: ", servicio.precio_unitario);
        this.prices.push(servicio.precio_unitario);
      });
      //console.log("los precios son: ",this.prices);
      this.totalPlanPersolnalized = this.prices.reduce((a, b) => a + b, 0);
      this.totalPay = this.totalPlanPersolnalized * this.formPlan.value.duracion

      
        const precioControl = this.formPlan.get('precio');
        if (precioControl) {
          precioControl.setValue(this.totalPay);
        }
    }else {
    }
  }

}
