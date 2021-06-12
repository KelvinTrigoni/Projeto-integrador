import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

import { HomeRoutingModule } from "./home.routing";
import { HomeComponent } from "./home.component";
import { HeaderComponent } from "../../components/header/header.component";
import { FilaComponent } from "./components/fila/fila.component";
import { GarconComponent } from './components/garcon/garcon.component';
import { FormularioComponent } from './components/garcon/components/formulario/formulario.component';
import { FormularioFilaComponent } from './components/fila/components/formulario-fila/formulario-fila.component';
import { FormularioMesasComponent } from './components/mesas/components/formulario/formulario.component';
import { MesasComponent } from './components/mesas/mesas.component';
import { FilaVinculoComponent } from './components/fila/components/fila-vinculo/fila-vinculo.component';
import { PerfilComponent } from './components/perfil/perfil.component';

@NgModule({
  declarations: [HomeComponent, HeaderComponent, FilaComponent, GarconComponent, FormularioComponent, FormularioFilaComponent, MesasComponent, FormularioMesasComponent, FilaVinculoComponent, PerfilComponent],
  imports: [CommonModule, HomeRoutingModule,FontAwesomeModule,ReactiveFormsModule],
})
export class HomeModule {}
