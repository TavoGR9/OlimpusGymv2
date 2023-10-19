import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-mensaje-emergente-eliminar',
  templateUrl: './mensaje-emergente-eliminar.component.html',
  styleUrls: ['./mensaje-emergente-eliminar.component.css']
})
export class MensajeEmergenteEliminarComponent {
  constructor(
    public dialogo: MatDialogRef<MensajeEmergenteEliminarComponent>,
    @Inject(MAT_DIALOG_DATA) public mensaje: string) { }

    cerrarDialogo(): void {
      this.dialogo.close(false);
    }
    confirmado(): void {
      this.dialogo.close(true);
    }

  ngOnInit() {
  }
}
