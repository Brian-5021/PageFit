import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { MisionvisionComponent } from './pages/misionvision/misionvision.component';
import { RutinasComponent } from './pages/rutinas/rutinas.component';
import { CrearutinaComponent } from './pages/crearutina/crearutina.component';
import { AjustesComponent } from './pages/ajustes/ajustes.component';
import { AuthGuard } from './services/auth.guard';



const routes: Routes = [
  {path: 'inicio', component: InicioComponent},
  {path: 'quienessomos', component: AboutusComponent},
  {path: 'misionyvision', component: MisionvisionComponent},
  {path: 'rutinas', component: RutinasComponent, canActivate: [ AuthGuard]},
  {path: 'creaturutina', component: CrearutinaComponent},
  {path: 'ajustes', component: AjustesComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'inicio' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
