import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { take } from 'rxjs/operators';

import { ToastService } from "@app/services/toast/toast.service";
import { ServiceService } from "@app/services/geral/service.service";

@Component({
  selector: 'app-fila-vinculo',
  templateUrl: './fila-vinculo.component.html',
  styleUrls: ['./fila-vinculo.component.scss']
})
export class FilaVinculoComponent implements OnInit {
  form: FormGroup;
  funcionarios: any[];
  clientes: any[];
  mesaLocal: any;
  mesa: any;

  // TODO, analizar esse código

  constructor(
    private formBuilder: FormBuilder,
    private toastService: ToastService,
    private services: ServiceService,
    private router: Router
  ) {
    this.form = this.formBuilder.group({
      clienteId: ["", [Validators.required]],
      mesaId: ["", [Validators.required]],
      funcionarioId: ["", [Validators.required]],
      status: ["acupado", [Validators.required]],
    });
   }

  ngOnInit(): void {
    this.mesaLocal = JSON.parse(localStorage.getItem('mesa'));
    this.services
    .getByIdMesa(this.mesaLocal.id)
    .pipe(take(1))
    .subscribe((suc: any) => {
      this.mesa = suc;
    });
    this.services
    .getFuncionarios()
    .pipe(take(1))
    .subscribe((suc: any) => {
      this.funcionarios = suc;
    });
    this.services
    .getByQtdCliente(this.mesaLocal.qtd)
    .pipe(take(1))
    .subscribe((suc: any) => {
      this.clientes = suc;
    });
  }

  vincular(){
    let mesaCliente = this.form.value;
    mesaCliente.mesaId = this.mesaLocal.id;

    this.services
    .postClienteMesa(mesaCliente)
    .pipe(take(1))
    .subscribe((suc: any) => {
      this.clientes = suc;

      this.toastService.success({ mensagem: "vinculado!" });
      this.form.reset();
    });

    // TODO, passar funcionario
    this.services
    .putMesa({id: this.mesaLocal.id, status: 'ocupada'})
    .pipe(take(1))
    .subscribe((suc: any) => {
      this.clientes = suc;
    });

    this.services
    .putCliente({id: mesaCliente.clienteId, status: 'atendido' })
    .pipe(take(1))
    .subscribe((suc: any) => {
      this.clientes = suc;
    });

    this.router.navigate(["/home", { outlets: { home: ["fila"] } }]);
  }

}
