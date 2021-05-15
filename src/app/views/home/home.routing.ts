import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FilaComponent } from './components/fila/fila.component';
import { GarconComponent } from './components/garcon/garcon.component';
import { HomeComponent } from './home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'fila', component: FilaComponent, outlet: 'home' },
  { path: 'garcom', component: GarconComponent, outlet: 'home' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
