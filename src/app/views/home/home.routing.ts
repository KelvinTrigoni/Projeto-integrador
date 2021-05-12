import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TesteComponent } from './components/teste/teste.component';
import { HomeComponent } from './home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'teste', component: TesteComponent, outlet: 'home' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
