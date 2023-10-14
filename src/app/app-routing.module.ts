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
import { CarruselComponent } from './user/carrusel/carrusel.component';
import { AboutUsComponent } from '../app/user/about-us/about-us.component'
import { SolicitudComponent } from './user/solicitud/solicitud.component';
import { WalletcardsComponent } from './user/walletcards/walletcards.component';
import { UserOptionBarComponent } from './user/user-option-bar/user-option-bar.component';
import { DetailscardComponent } from './user/detailscard/detailscard.component';
import { PlanComponent } from './user/plan/plan.component';
import { SucursalComponent } from './user/sucursal/sucursal.component'
import { PerfilUsuarioComponent } from './user/perfil-usuario/perfil-usuario.component';
import { EditarPerfilComponent } from './user/editar-perfil/editar-perfil.component';
import { ConfirmacionComponent } from './user/confirmacion/confirmacion.component';
import { PlanvirtualComponent } from './user/planvirtual/planvirtual.component';
import { AltaRecepcionComponent } from './recepcionist/alta-recepcion/alta-recepcion.component';


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
  { path: "carrusel", component: CarruselComponent },
  { path: "sobre-nosotros", component: AboutUsComponent },
  { path: "solicitud", component: SolicitudComponent },
  { path: "cartera" , component: UserOptionBarComponent},
  { path: "agregartarjeta" , component: DetailscardComponent},
  { path: "tutarjeta" , component: WalletcardsComponent},
  { path: "plan", component: PlanComponent },
  { path: "sucursal", component: SucursalComponent},
  { path: "perfil-usuario", component: PerfilUsuarioComponent},
  { path: "editar-perfil", component: EditarPerfilComponent},
  { path: "confirmacion", component: ConfirmacionComponent},
  { path: "VirtualOlimpusGym", component: PlanvirtualComponent },

  //componentes recepcionista
  { path: "stock", component: StockComponent },
  { path: "detalles-compra", component: DetalleCompraComponent },
  { path: "membresias", component: MembresiasComponent },
  { path: "alta-recepcion", component: AltaRecepcionComponent },
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
