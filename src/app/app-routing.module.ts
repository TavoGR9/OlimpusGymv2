import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './user/login/login.component';
import { RecuperarPasswordComponent } from './user/recuperar-password/recuperar-password.component';
import { SucursalesComponent } from './user/sucursales/sucursales.component';
import { AltaUsuarioComponent } from './user/alta-usuario/alta-usuario.component';
import { FinalizarCompraComponent } from './user/finalizar-compra/finalizar-compra.component';
import { DetalleCompraComponent } from './recepcionist/detalle-compra/detalle-compra.component';
import { StockComponent } from './recepcionist/stock/stock.component';
import { AltaColaboradorComponent } from './admin/alta-colaborador/alta-colaborador.component';
import { IndexComponent } from './user/index/index.component';
import { ProductosComponent } from './user/productos/productos.component';
import { AsistenciaComponent } from './admin/asistencia/asistencia.component';
import { EntrenamientoPiernaComponent } from './trainer/entrenamiento-pierna/entrenamiento-pierna.component';
import { MembresiasComponent } from './recepcionist/membresias/membresias.component';

const routes: Routes = [
  //cuando el usuario no ponga nada
  { path: "", redirectTo: "index", pathMatch: "full" },
  //componentes usuario
  { path: "index", component: IndexComponent },
  { path: "login", component: LoginComponent },
  { path: "olvide-contrasena", component: RecuperarPasswordComponent },
  { path: "sucursales", component: SucursalesComponent },
  { path: "registro", component: AltaUsuarioComponent },
  { path: "finaliza-compra", component: FinalizarCompraComponent },
  { path: "productos", component: ProductosComponent },
  //componentes recepcionista
  { path: "stock", component: StockComponent },
  { path: "detalles-compra", component: DetalleCompraComponent },
  { path: "membresias", component: MembresiasComponent },
  //componentes admin
  { path: "alta-colaborador", component: AltaColaboradorComponent },
  { path: "asistencia", component: AsistenciaComponent },
  //componentes trainer
  { path: "rutina-pierna", component: EntrenamientoPiernaComponent },
  //cuando el usuario agrega cualquier cosa como ruta
  { path: "**", redirectTo: "index", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
