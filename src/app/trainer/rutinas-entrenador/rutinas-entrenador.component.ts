import { Component, Input, Output, EventEmitter } from '@angular/core';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {LiveAnnouncer} from '@angular/cdk/a11y';
import {ViewChild} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import { Sort } from '@angular/material/sort';
import { MatDrawer } from '@angular/material/sidenav';

export interface PeriodicElement {
  Ejercicio: string;
  duracion: string;
  Series: number;
  Repeticiones: string;
  descanso: string;
  demo: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {Ejercicio: "Jumping jacs", duracion: '2 minutos', Series: 2, Repeticiones: 'de 15 a 24',descanso:"15-45 segundos",demo:"img"},
  {Ejercicio: "Jumping jacs", duracion: '2 minutos', Series: 2, Repeticiones: 'de 15 a 24',descanso:"15-45 segundos",demo:"img"},
  {Ejercicio: "Jumping jacs", duracion: '2 minutos', Series: 2, Repeticiones: 'de 15 a 24',descanso:"15-45 segundos",demo:"img"},
  {Ejercicio: "Jumping jacs", duracion: '2 minutos', Series: 2, Repeticiones: 'de 15 a 24',descanso:"15-45 segundos",demo:"img"},
  {Ejercicio: "Jumping jacs", duracion: '2 minutos', Series: 2, Repeticiones: 'de 15 a 24',descanso:"15-45 segundos",demo:"img"},
  {Ejercicio: "Jumping jacs", duracion: '2 minutos', Series: 2, Repeticiones: 'de 15 a 24',descanso:"15-45 segundos",demo:"img"}
];

@Component({
  selector: 'app-rutinas-entrenador',
  templateUrl: './rutinas-entrenador.component.html',
  styleUrls: ['./rutinas-entrenador.component.css'],

})
export class RutinasEntrenadorComponent {
  userRating: number = 0;  // Agregada la propiedad userRating con un valor inicial de 0
  displayedColumns: string[] = ['Ejercicio', 'duracion', 'Series', 'Repeticiones', 'descanso', 'demo'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  constructor(private _liveAnnouncer: LiveAnnouncer) { }

  
  @ViewChild(MatSort)sort!: MatSort;
  @ViewChild('drawer') drawer!: MatDrawer;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  /** Announce the change in sort state for assistive technology. */
  announceSortChange(sortData: Sort) {
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.
    if (sortData.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortData.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
  
  ngOnInit(): void { }}

@Component({
  selector: 'app-star-rating',
  template: `
    <mat-icon *ngFor="let star of stars; let idx = index" 
              [ngClass]="{'active': idx < rating}" 
              (click)="onStarClick(idx + 1)" 
              matTooltip="{{idx + 1}}">
      star
    </mat-icon>
  `,
  styles: [`
    mat-icon {
      cursor: pointer;
      color: gray;
    }
    .active {
      color: gold;
    }
  `]
})
export class StarRatingComponent {
  @Input() rating = 0;
  @Output() ratingChange = new EventEmitter<number>();
  
  stars = [1, 2, 3, 4, 5];

  onStarClick(newRating: number) {
    this.rating = newRating;
    this.ratingChange.emit(this.rating);
  }
 
}

