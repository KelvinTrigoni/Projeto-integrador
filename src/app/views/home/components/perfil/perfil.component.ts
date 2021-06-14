import { Component, OnInit } from "@angular/core";
import { ServiceService } from "@app/services/geral/service.service";

@Component({
  selector: "app-perfil",
  templateUrl: "./perfil.component.html",
  styleUrls: ["./perfil.component.scss"],
})
export class PerfilComponent implements OnInit {
  nomeArquivo: string;

  constructor(private service: ServiceService) {}

  ngOnInit(): void {}
}
