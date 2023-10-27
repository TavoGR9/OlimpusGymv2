import { Component, OnInit, ViewChild, ElementRef,AfterViewInit } from '@angular/core';
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
  @ViewChild('loadMoreMarker', { read: ElementRef }) loadMoreMarker: ElementRef | null = null;
  sucursales: sucursal[] = [];
  membresias: plan[] = [];
  currentPage = 1;
  gimnasiosPerPage = 4;
  displayedGimnasios: sucursal[] = [];
  startIndex = 0;

  constructor(
    private router: Router,
    private sucursalService: SucursalService,
    private planService: PlanService,
  ) {}

  navegarPagina(url: string): void {
    console.log('Va a navegar', url);
    this.router.navigate([url]);
  }

  ngOnInit(): void {
    this.sucursalService.getSucursales().subscribe((data) => {
      this.sucursales = data; // Asignamos los datos de las sucursales a la propiedad sucursales
      this.displayedGimnasios = this.sucursales.slice(0, this.gimnasiosPerPage);

      this.planService.obternerPlan().subscribe((membresias: Object) => {
        // Mapea las membresías a los gimnasios correspondientes utilizando el ID de gimnasio
        this.sucursales.forEach((sucursal) => {
          sucursal.membresias = (membresias as plan[]).filter((membresia) => membresia.Gimnasio_idGimnasio === sucursal.idGimnasio);
        });
      });
    });
  }

  /*currentPage = 1;
  gimnasiosPerPage = 4;
  displayedGimnasios: sucursal[] = [];
  startIndex = 0;*/

  loadMoreGimnasios() {
    this.currentPage++; // Incrementa la página actual 1 + 1 = 2
    const startIndex = (this.currentPage - 1) * this.gimnasiosPerPage; //1 * 4 = 4
    const endIndex = startIndex + this.gimnasiosPerPage; //endIndex = 0 + 4 = 4
    const newGimnasios = this.sucursales.slice(startIndex, endIndex);// []
    this.displayedGimnasios = this.displayedGimnasios.concat(newGimnasios);
  }

  
}
