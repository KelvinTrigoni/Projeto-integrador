import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HomeRoutingModule } from "./home.routing";
import { HomeComponent } from "./home.component";
import { HeaderComponent } from "../../components/header/header.component";
import { FilaComponent } from "./components/fila/fila.component";

@NgModule({
  declarations: [HomeComponent, HeaderComponent, FilaComponent],
  imports: [CommonModule, HomeRoutingModule],
})
export class HomeModule {}
