import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home.routing';
import { HomeComponent } from './home.component';
import { TesteComponent } from './components/teste/teste.component';
import { HeaderComponent } from '../../components/header/header.component';


@NgModule({
  declarations: [HomeComponent, TesteComponent, HeaderComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
