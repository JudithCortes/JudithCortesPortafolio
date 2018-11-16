import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomeComponent} from './components/home/home.component';
import {HabilidadesComponent} from './components/habilidades/habilidades.component';
import {ProyectosComponent} from './components/proyectos/proyectos.component';
import {ContactoComponent} from './components/contacto/contacto.component';

const routes: Routes = [
  {path:'', component: HomeComponent },
  {path:'habilidades', component: HabilidadesComponent },
  {path:'proyectos', component: ProyectosComponent },
  {path:'contacto', component: ContactoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }