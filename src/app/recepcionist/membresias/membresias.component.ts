import { Component, OnInit } from '@angular/core';
import { plan } from 'src/app/servicios/plan';
import { PlanService } from 'src/app/servicios/plan.service';
import { Router, ActivatedRoute } from '@angular/router';
import { TestService } from 'src/app/servicios/test.service';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

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

constructor(private activeRoute: ActivatedRoute,private router: Router, private planService: PlanService, private testService: TestService, private formulario: FormBuilder) {
  this.elID = this.activeRoute.snapshot.paramMap.get('id');
  this.gymName = this.activeRoute.snapshot.paramMap.get('idName');
  
  console.log(this.elID);
  console.log(this.gymName);

    //servicio test
    this.testService.idGym=this.elID;
    this.testService.nameGym=this.gymName;
   
    
  if (this.elID) { // Validar si el ID es nulo
    this.planService.obternerPlan().subscribe(
      (membresias: any) => {
        // Filtrar las membresías para obtener solo las del gimnasio con el ID correspondiente
        this.membresias = membresias.filter((item:any) => item.Gimnasio_idGimnasio === this.elID);
        console.log("esto hace"+this.membresias);
        const nombresMembresias = this.membresias.map((membresia: any) => membresia.titulo); // Reemplaza 'nombre' con el nombre de la propiedad que desees imprimir
    console.log("Nombres de membresías:", nombresMembresias);
      },
      (error) => {
        console.error('Error al obtener membresías:', error);
        // Puedes manejar el error aquí, por ejemplo, mostrar un mensaje de error en tu aplicación.
      }
    );
  }

  this.formPlan = this.formulario.group({
    titulo: ['Plan personalizado', [Validators.required, Validators.pattern(/^[^\d!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]+$/u)]],
    detalles: ['Este es un plan personalizado', [Validators.required, Validators.pattern(/^[^\d!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]+$/u)]],
    duracion: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
    servicioseleccionado: [[], Validators.required],
    precio: ['', [Validators.required, Validators.pattern(/^\d+(\.\d{1,2})?$/)]],
    status: ['1', [Validators.pattern(/^\d+$/)]],
    tipo_membresia: [2, [Validators.required, Validators.pattern(/^\d+$/)]],
    Gimnasio_idGimnasio: [this, Validators.required],
  });
}

navegarPagina(url: String): void {
  //console.log("Va a navegar", url);
  this.router.navigate([ url ]);
}





  ngOnInit(): void {
    this.planService.obternerPlan().subscribe(respuesta=>{console.log(respuesta)
    this.plan=respuesta;
    });
    
  }

}
