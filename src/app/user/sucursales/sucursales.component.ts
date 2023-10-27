

import { FormBuilder, FormGroup } from '@angular/forms';
import { ConnectionService } from 'src/app/servicios/connection.service';

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

/*export class SucursalesComponent {
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
  }*/

export class SucursalesComponent implements OnInit {
  form: FormGroup;
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
    private http: ConnectionService, private fb: FormBuilder
  ) {
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
        this.displayedGimnasios = this.sucursales.slice(0, this.gimnasiosPerPage); 

        this.http.filtrarMem(this.form.value).subscribe((membresias: Object) => {
          this.sucursales.forEach((sucursal) => {
            sucursal.membresias = (membresias as plan[]).filter((membresia) => membresia.Gimnasio_idGimnasio === sucursal.idGimnasio);
          });
        });
        
      },
      error: (error) => {
        console.error(error);
      }
    })
  }
  
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

  /*loadMoreGimnasios() {
    const endIndex = this.startIndex + this.gimnasiosPerPage;
    if (endIndex >= this.sucursales.length) {
      // No hay más gimnasios para cargar
      return;
    }
  
    const newGimnasios = this.sucursales.slice(this.startIndex, endIndex);
    this.displayedGimnasios = this.displayedGimnasios.concat(newGimnasios);
    this.startIndex = endIndex;
  }*/

  loadMoreGimnasios() {
    this.currentPage++; // Incrementa la página actual
    const startIndex = (this.currentPage - 1) * this.gimnasiosPerPage;
    const endIndex = startIndex + this.gimnasiosPerPage;
    const newGimnasios = this.sucursales.slice(startIndex, endIndex);
    this.displayedGimnasios = this.displayedGimnasios.concat(newGimnasios);
  }
  
  

  /*ngAfterViewInit() {
    if (this.loadMoreMarker) { // Comprobar si this.loadMoreMarker no es nulo
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.loadMoreGimnasios();
          }
        });
      });
  
      observer.observe(this.loadMoreMarker.nativeElement);
    }
  }*/
  
}
