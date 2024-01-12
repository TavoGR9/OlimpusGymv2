
import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';

interface Food {
  value: string;
  viewValue: string;
}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: Date;
  symbol: string;
  action: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Proteina', weight: createDate(13, 8, 2023), symbol: 'Entregado', action: 'Ver detalles' },
  { position: 2, name: 'Powerade', weight: new Date('10/03/2023'), symbol: 'En Espera', action: 'Ver detalles' },
  { position: 3, name: 'Sunny Caminadora Semi Profesional SF-T7718', weight: new Date('10/05/2023'), symbol: 'En Espera', action: 'Ver detalles' },
  // ... otros datos
];

function createDate(day: number, month: number, year: number): Date {
  // JavaScript interpreta el mes como 0-11, por lo que debes restar 1 al mes.
  return new Date(year, month - 1, day);
}

@Component({
  selector: 'app-historial-compras',
  templateUrl: './historial-compras.component.html',
  styleUrls: ['./historial-compras.component.css'],
})
export class HistorialComprasComponent {
  formatDateWithLeadingZeros(date: Date): string {
    const day = ('0' + date.getDate()).slice(-2);
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
  }

  hide = true;
  foods: Food[] = [
    { value: 'Proteina-0', viewValue: 'Proteina' },
    { value: 'Tenis-1', viewValue: 'Tenis' },
    { value: 'Powerade-2', viewValue: 'Powerade' },
  ];

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'action'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  applyDateFilter(event: MatDatepickerInputEvent<Date>) {
    const filterDate = event.value; // Obtiene la fecha ingresada en el filtro
    this.dataSource.filterPredicate = (data, filter) => {
      const formattedDate = this.formatDateWithLeadingZeros(data.weight); // Formatea la fecha del registro
      return formattedDate.includes(filter); // Verifica si el registro contiene la fecha seleccionada
    };

    this.dataSource.filter = filterDate ? this.formatDateWithLeadingZeros(filterDate) : '';
  }
 
  verDetalles(element: PeriodicElement) {
    // Implementa la lógica para mostrar los detalles del elemento seleccionado aquí
    console.log('Detalles de:', element.name);
    // Puedes abrir un modal, mostrar información adicional, etc.
  }
}
