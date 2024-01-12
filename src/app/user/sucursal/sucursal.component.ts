import { Component, ElementRef, ViewChild } from '@angular/core';
import { sucursal } from 'src/app/servicios/sucursal';
import { SucursalService } from 'src/app/servicios/sucursal.service';
import { horarioService } from 'src/app/servicios/horario.service'; 
import { OnInit } from '@angular/core';
import { GimnasioService } from 'src/app/servicios/gimnasio.service';
import { PlanService } from 'src/app/servicios/plan.service';
import { Router, ActivatedRoute } from '@angular/router';
import { TestService } from 'src/app/servicios/test.service';


@Component({
  selector: 'app-sucursal',
  templateUrl: './sucursal.component.html',
  styleUrls: ['./sucursal.component.css']
})
export class SucursalComponent implements OnInit{
  datosHorario: any[] = [];
  plan: any;
  datosGym: any[] = [];
  membresias: any[] = [];
  message: string = "";
  elID:any;
  gymName: any;

  constructor(
    private HorarioService: horarioService,
    private gimnasioService: GimnasioService,
    private planService: PlanService,
    private activeRoute: ActivatedRoute,
    private testService: TestService,) {

      this.elID = this.activeRoute.snapshot.paramMap.get('id');
  this.gymName = this.activeRoute.snapshot.paramMap.get('idName');


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
  }


 

  ngOnInit(): void {
    // Llama a la función de consulta al cargar el componente
    this.consultarHorario();
    this.consultarGym();
    this.planService.obternerPlan().subscribe(respuesta=>{console.log(respuesta)
      this.plan=respuesta;
      });
  }

  consultarGym(){
    this.gimnasioService.consultarPlan(this.elID).subscribe(
      (data) => {
        this.datosGym = data; 

        console.log('Datos del gym:', this.datosGym);

        if (this.datosGym.length > 0) {
          const primerGym = this.datosGym[0];
          const nombreDelGym = primerGym.nombreGym;
          console.log('Nombre del gym:', nombreDelGym);
        }
      }
    
    )
  }
  
  consultarHorario() {
    this.HorarioService.consultarHorario(this.elID).subscribe(
      (data) => {
        this.datosHorario = data;  // Asigna los datos a la propiedad
        console.log('Datos del horario:', this.datosHorario);
      },
      (error) => {
        this.message = "Horario no disponible";
        console.error('Error al consultar el horario:', error);
      }
    );
  }
  
}
