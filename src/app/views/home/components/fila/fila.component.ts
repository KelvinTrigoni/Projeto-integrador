import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { take } from "rxjs/operators";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";

import { ServiceService } from "@app/services/geral/service.service";

@Component({
  selector: "app-fila",
  templateUrl: "./fila.component.html",
  styleUrls: ["./fila.component.scss"],
})
export class FilaComponent implements OnInit {
  faPen = faPen;
  faTrash = faTrash;

  mesasLivre: number[] = [];
  fila: any[] = [];

  constructor(private router: Router, private services: ServiceService) {}

  ngOnInit(): void {
    this.services.getCliente().pipe(take(1)).subscribe((suc: any[]) =>{
      this.fila = suc.filter(item => item.status === 'aguardando');
    });
    this.services.getMesa().pipe(take(1)).subscribe((suc: any[]) =>{
      this.mesasLivre = suc.filter(item => item.status === 'livre');
    });
  }

  cadastrar(): void {
    this.router.navigate(["/home", { outlets: { home: ["fila-cadastro"] } }]);
  }

  vincularCliente(id: number, qtd: number){
    localStorage.setItem('mesa', JSON.stringify({id: id, qtd: qtd}));
    this.router.navigate(["/home", { outlets: { home: ["fila-vinculo"] } }]);
  }

  excluirCliente(id: number) {
    this.services.deleteCliente(id).pipe(take(1)).subscribe((suc: any[]) =>{
      this.mesasLivre = suc.filter(item => item.status === 'livre');
    });
  }
}
