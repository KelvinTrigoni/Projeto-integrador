import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FilaComponent } from './components/fila/fila.component';
import { FormularioComponent } from './components/garcon/components/formulario/formulario.component';
import { GarconComponent } from './components/garcon/garcon.component';
import { HomeComponent } from './home.component';
import { FormularioFilaComponent } from './components/fila/components/formulario-fila/formulario-fila.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'fila', component: FilaComponent, outlet: 'home' },
  { path: 'garcom', component: GarconComponent, outlet: 'home' },
  { path: 'garcom-cadastro', component: FormularioComponent, outlet: 'home' },
  { path: 'alterar', component: FormularioComponent, outlet: 'home' },
  { path: 'fila-cadastro', component: FormularioFilaComponent, outlet: 'home' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
