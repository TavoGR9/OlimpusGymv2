import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatSidenavModule} from '@angular/material/sidenav';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AltaColaboradorComponent } from './admin/alta-colaborador/alta-colaborador.component';
import { StockComponent } from './recepcionist/stock/stock.component';
import { DetalleCompraComponent } from './recepcionist/detalle-compra/detalle-compra.component';
import { AltaUsuarioComponent } from './user/alta-usuario/alta-usuario.component';
import { LoginComponent } from './user/login/login.component';
import { FinalizarCompraComponent } from './user/finalizar-compra/finalizar-compra.component';
import { SucursalesComponent } from './user/sucursales/sucursales.component';
import { RecuperarPasswordComponent } from './user/recuperar-password/recuperar-password.component';
import { IndexComponent } from './user/index/index.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedModule } from './shared/shared.module';

import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSlideToggleModule, _MatSlideToggleRequiredValidatorModule} from '@angular/material/slide-toggle';
import { ProductosComponent } from './user/productos/productos.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { AsistenciaComponent } from './admin/asistencia/asistencia.component';
import { EntrenamientoPiernaComponent } from './trainer/entrenamiento-pierna/entrenamiento-pierna.component';
import { MembresiasComponent } from './recepcionist/membresias/membresias.component';
import { CarruselComponent } from './user/carrusel/carrusel.component';
import { AboutUsComponent } from './user/about-us/about-us.component';
import { SolicitudComponent } from './user/solicitud/solicitud.component';
import { SucursalComponent } from './user/sucursal/sucursal.component';
import { UserOptionBarComponent } from './user/user-option-bar/user-option-bar.component';
import { DetailscardComponent } from './user/detailscard/detailscard.component';
import { WalletcardsComponent } from './user/walletcards/walletcards.component';
import { PlanComponent } from './user/plan/plan.component';
import { PerfilUsuarioComponent } from './user/perfil-usuario/perfil-usuario.component';
import { EditarPerfilComponent } from './user/editar-perfil/editar-perfil.component';
import { ConfirmacionComponent } from './user/confirmacion/confirmacion.component';
import { PlanvirtualComponent } from './user/planvirtual/planvirtual.component';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { PlanListaComponent } from './user/plan-lista/plan-lista.component';
import { MatTableModule } from '@angular/material/table';
import { PlanEditarComponent } from './user/plan-editar/plan-editar.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatRadioModule } from '@angular/material/radio';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MensajeEmergentesComponent } from './user/mensaje-emergentes/mensaje-emergentes.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MensajeEmergenteEliminarComponent } from './user/mensaje-emergente-eliminar/mensaje-emergente-eliminar.component';
import { CarritoComponent } from './recepcionist/carrito/carrito.component';
import { SucursalInsertComponent } from './admin/sucursal-insert/sucursal-insert.component';
import { SucursalListaComponent } from './admin/sucursal-lista/sucursal-lista.component';
import { SucursaEditComponent } from './admin/sucursa-edit/sucursa-edit.component';
import { HorariosComponent } from './admin/horarios/horarios.component';
import { PerfilMiguelComponent } from './user/perfil-miguel/perfil-miguel.component';
import { PagosMiguelComponent } from './user/pagos-miguel/pagos-miguel.component';
import { MembresiaMiguelComponent } from './user/membresia-miguel/membresia-miguel.component';
import { HomeMiguelComponent } from './user/home-miguel/home-miguel.component';
import { PagoInscripcionComponent } from './user/pago-inscripcion/pago-inscripcion.component';


@NgModule({
  declarations: [
    AppComponent,
    AltaColaboradorComponent,
    StockComponent,
    DetalleCompraComponent,
    AltaUsuarioComponent,
    LoginComponent,
    FinalizarCompraComponent,
    SucursalesComponent,
    RecuperarPasswordComponent,
    IndexComponent,
    ProductosComponent,
    AsistenciaComponent,
    EntrenamientoPiernaComponent,
    MembresiasComponent,
    CarruselComponent,
    AboutUsComponent,
    SolicitudComponent,
    SucursalComponent,
    UserOptionBarComponent,
    DetailscardComponent,
    WalletcardsComponent,
    PlanComponent,
    PerfilUsuarioComponent,
    EditarPerfilComponent,
    ConfirmacionComponent,
    PlanvirtualComponent,
    PlanListaComponent,
    PlanEditarComponent,
    MensajeEmergentesComponent,
    MensajeEmergenteEliminarComponent,
    CarritoComponent,
    SucursalInsertComponent,
    SucursalListaComponent,
    SucursaEditComponent,
    HorariosComponent,
    PerfilMiguelComponent,
    PagosMiguelComponent,
    MembresiaMiguelComponent,
    HomeMiguelComponent,
    PagoInscripcionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    SharedModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    MatSelectModule,
    MatTabsModule,
    MatSlideToggleModule,
    MatCheckboxModule,
    MatSidenavModule,
    ToastrModule.forRoot({positionClass:'toast-bottom-left'}),
    HttpClientModule, 
    MatTableModule,
    MatCardModule,
    MatButtonToggleModule,
    MatRadioModule,
    _MatSlideToggleRequiredValidatorModule,
    FlexLayoutModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
