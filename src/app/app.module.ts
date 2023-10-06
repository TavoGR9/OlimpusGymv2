import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { ProductosComponent } from './user/productos/productos.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { AsistenciaComponent } from './admin/asistencia/asistencia.component';
import { EntrenamientoPiernaComponent } from './trainer/entrenamiento-pierna/entrenamiento-pierna.component';
import { MembresiasComponent } from './recepcionist/membresias/membresias.component';
import { CarruselComponent } from './user/carrusel/carrusel.component';
import { AboutUsComponent } from './user/about-us/about-us.component';
import { SolicitudComponent } from './user/solicitud/solicitud.component';


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
    SolicitudComponent
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
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
