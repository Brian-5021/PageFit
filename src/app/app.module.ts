import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { RutinasComponent } from './pages/rutinas/rutinas.component';
import { CrearutinaComponent } from './pages/crearutina/crearutina.component';
import { MisionvisionComponent } from './pages/misionvision/misionvision.component';
import { AjustesComponent } from './pages/ajustes/ajustes.component';
import { InicioComponent } from './pages/inicio/inicio.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutusComponent,
    RutinasComponent,
    CrearutinaComponent,
    MisionvisionComponent,
    AjustesComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
