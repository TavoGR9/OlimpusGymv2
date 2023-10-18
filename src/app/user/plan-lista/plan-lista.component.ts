import { Component, OnInit } from '@angular/core';
import { plan } from 'src/app/servicios/plan';
import { PlanService } from 'src/app/servicios/plan.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ChangeDetectorRef } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { MensajeEmergenteEliminarComponent } from '../mensaje-emergente-eliminar/mensaje-emergente-eliminar.component'; 


@Component({
  selector: 'app-plan-lista',
  templateUrl: './plan-lista.component.html',
  styleUrls: ['./plan-lista.component.css']
})
export class PlanListaComponent implements OnInit {
  plan: any;

  constructor(
    private planService:PlanService,
    private router: Router,
    private route: ActivatedRoute,
    private cd: ChangeDetectorRef,
    public dialog: MatDialog
  ){}

 
  displayedColumns: string[] = ['id','title','trainer', 'price', 'duration', 'details','cancha','alberca','ofertas','gimnasio','IDgimnasio','actions'];

  ngOnInit(): void {
    this.planService.obternerPlan().subscribe(respuesta=>{console.log(respuesta)
    this.plan=respuesta;
    });
    
  }

     borrarPlan(idMem: any) {
      console.log(idMem);
      this.dialog.open(MensajeEmergenteEliminarComponent, {
        data: `¿Desea eliminar esta membresía?`,
      })
      .afterClosed()
        .subscribe((confirmado: Boolean) => {
          if (confirmado) {
            this.planService.borrarPlan(idMem).subscribe((respuesta) => {
              console.log("si entro") 
              window.location.reload();       
            });
          } else {
            
          }
        });
     }
    }


    
    
    
    
  


