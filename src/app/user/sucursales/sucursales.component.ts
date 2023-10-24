import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { sucursal } from 'src/app/servicios/sucursal';
import { plan } from 'src/app/servicios/plan';
import { SucursalService } from 'src/app/servicios/sucursal.service';
import { PlanService } from 'src/app/servicios/plan.service';

@Component({
  selector: 'app-sucursales',
  templateUrl: './sucursales.component.html',
  styleUrls: ['./sucursales.component.css']
})
export class SucursalesComponent implements OnInit {
  sucursales: sucursal[] = [];
  membresias: plan[] = [];

  constructor(
    private router: Router,
    private sucursalService: SucursalService,
    private planService: PlanService
  ) {}

  navegarPagina(url: string): void {
    console.log('Va a navegar', url);
    this.router.navigate([url]);
  }

  ngOnInit(): void {
    this.sucursalService.getSucursales().subscribe((data) => {
      this.sucursales = data; // Asignamos los datos de las sucursales a la propiedad sucursales

      this.planService.obternerPlan().subscribe((membresias: Object) => {
        // Mapea las membresías a los gimnasios correspondientes utilizando el ID de gimnasio
        this.sucursales.forEach((sucursal) => {
          sucursal.membresias = (membresias as plan[]).filter((membresia) => membresia.Gimnasio_idGimnasio === sucursal.idGimnasio);
        });
      });
    });
  }
}
