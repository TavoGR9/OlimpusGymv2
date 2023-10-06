import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-rutinas-entrenador',
  templateUrl: './rutinas-entrenador.component.html',
  styleUrls: ['./rutinas-entrenador.component.css']
})
export class RutinasEntrenadorComponent {
  userRating: number = 0;  // Agregada la propiedad userRating con un valor inicial de 0
  displayedColumns: string[] = ['col1', 'col2', 'col3', 'col4', 'col5', 'col6'];
  data: any[] = Array(6).fill({});  // Crear un array de 6 elementos para 6 filas

  constructor() { }

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
