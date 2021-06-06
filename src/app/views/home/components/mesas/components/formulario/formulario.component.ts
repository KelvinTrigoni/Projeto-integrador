import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { take } from "rxjs/operators";

import { ToastService } from "@app/services/toast/toast.service";
import { ServiceService } from "@app/services/geral/service.service";

@Component({
  selector: "app-formulario",
  templateUrl: "./formulario.component.html",
  styleUrls: ["./formulario.component.scss"],
})
export class FormularioMesasComponent implements OnInit {
  form: FormGroup;
  funcionarios: any[] = [];

  edicao = false;

  status: any = [
    {
      status: "livre",
    },
    {
      status: "ocupado",
    },
  ];

  private idMesa: number;

  constructor(
    private formBuilder: FormBuilder,
    private toastService: ToastService,
    private services: ServiceService
  ) {
    this.form = this.formBuilder.group({
      descricao: ["", [Validators.required, Validators.minLength(2)]],
      qtdCadeiras: ["", [Validators.required]],
      status: ["livre", [Validators.required]],
      funcionarioId: [0, [Validators.required]],
    });
  }

  ngOnInit(): void {
    if (localStorage.getItem("idMesa")) {
      this.idMesa = Number(localStorage.getItem("idMesa"));
      localStorage.removeItem("idMesa");
      this.services
        .getByIdMesa(this.idMesa)
        .pipe(take(1))
        .subscribe((suc: any[]) => {
          this.edicao = true;
          this.form.patchValue(suc);
        });
    }
    this.services
      .getFuncionarios()
      .pipe(take(1))
      .subscribe((suc: any) => {
        this.funcionarios = suc;
      });
  }

  cadastrar(): void {
    this.services
      .postMesa(this.form.value)
      .pipe(take(1))
      .subscribe(
        (suc: any) => {
          console.log(suc);

          this.toastService.success({ mensagem: "cadastrado!" });
          this.form.reset();
        },
        (err: any) => this.toastService.warning({ mensagem: "erro inesperado" })
      );
    this.toastService.success({ mensagem: "cadastrado!" });
    this.form.reset();
  }

  alterar(): void {
    let body = this.form.value;
    body.id = this.idMesa;

    this.services
      .putMesa(this.form.value)
      .pipe(take(1))
      .subscribe(
        (suc: any) => {
          console.log(suc);

          this.toastService.success({ mensagem: "alterado!" });
          this.form.reset();
        },
        (err: any) => this.toastService.warning({ mensagem: "erro inesperado" })
      );
  }
}
