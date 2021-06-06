import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { take } from "rxjs/operators";

import { ToastService } from "@app/services/toast/toast.service";
import { ServiceService } from "@app/services/geral/service.service";

@Component({
  selector: "app-formulario-fila",
  templateUrl: "./formulario-fila.component.html",
  styleUrls: ["./formulario-fila.component.scss"],
})
export class FormularioFilaComponent implements OnInit {
  form: FormGroup;
  funcionarios: any[];
  constructor(
    private formBuilder: FormBuilder,
    private toastService: ToastService,
    private services: ServiceService
  ) {
    this.form = this.formBuilder.group({
      nome: ["", [Validators.required, Validators.minLength(2)]],
      qtdPessoas: ["", [Validators.required]],
      status: ["aguardando", [Validators.required]],
      funcionarioId: [0, [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.services
      .getFuncionarios()
      .pipe(take(1))
      .subscribe((suc: any) => {
        this.funcionarios = suc;
      });
  }

  cadastrar(): void {
    this.services
      .postCliente(this.form.value)
      .pipe(take(1))
      .subscribe(
        (suc: any) => {
          console.log(suc);

          this.toastService.success({ mensagem: "cadastrado!" });
          this.form.reset();
        },
        (err: any) => this.toastService.warning({ mensagem: "erro inesperado" })
      );
  }
}
