import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

import { HomeRoutingModule } from "./home.routing";
import { HomeComponent } from "./home.component";
import { HeaderComponent } from "../../components/header/header.component";
import { FilaComponent } from "./components/fila/fila.component";
import { GarconComponent } from './components/garcon/garcon.component';

@NgModule({
  declarations: [HomeComponent, HeaderComponent, FilaComponent, GarconComponent],
  imports: [CommonModule, HomeRoutingModule,FontAwesomeModule,ReactiveFormsModule],
})
export class HomeModule {}
