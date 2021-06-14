import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { take } from "rxjs/operators";
import { Router } from "@angular/router";

import { ToastService } from "../../../../../../services/toast/toast.service";
import { ServiceService } from "@app/services/geral/service.service";

@Component({
  selector: "app-formulario",
  templateUrl: "./formulario.component.html",
  styleUrls: ["./formulario.component.scss"],
})
export class FormularioComponent implements OnInit {
  form: FormGroup;
  perfil: any[] = [];

  edicao = false;

  private idFunc: number;

  constructor(
    private formBuilder: FormBuilder,
    private services: ServiceService,
    private toastService: ToastService,
    private router: Router
  ) {
    this.form = this.formBuilder.group({
      nome: ["", [Validators.required, Validators.minLength(2)]],
      username: ["", [Validators.required, Validators.minLength(3)]],
      senha: ["", [Validators.required, Validators.minLength(3)]],
      horaInicio: ["", Validators.required],
      horaFim: ["", Validators.required],
      perfilId: ["", Validators.required],
    });
  }

  ngOnInit(): void {
    if(localStorage.getItem('idGarcom')){
      this.idFunc = Number(localStorage.getItem('idGarcom'))
      localStorage.removeItem('idGarcom');
      this.services
      .getByIdFuncionarios(this.idFunc)
      .pipe(take(1))
      .subscribe((suc: any[]) => {
        this.edicao = true;
        this.form.patchValue(suc);
      });
    }
    this.services
      .getPerfil()
      .pipe(take(1))
      .subscribe((suc: any[]) => {
        this.perfil = suc;
      });
  }

  cadastrar(): void {
    this.services
    .postFuncionarios(this.form.value)
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

  alterar(): void {
    let body = this.form.value;
    body.id = this.idFunc;

    this.services
    .putFuncionarios(this.form.value)
    .pipe(take(1))
    .subscribe(
      (suc: any) => {
        console.log(suc);

        this.router.navigate(["/home", { outlets: { home: ["garcom"] } }]);
        this.toastService.success({ mensagem: "alterado!" });
        this.form.reset();
      },
      (err: any) => this.toastService.warning({ mensagem: "erro inesperado" })
    );
  }
}
