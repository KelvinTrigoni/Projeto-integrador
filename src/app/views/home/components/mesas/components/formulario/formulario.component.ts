import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import { ToastService } from '../../../../../../services/toast/toast.service';


@Component({
  selector: "app-formulario",
  templateUrl: "./formulario.component.html",
  styleUrls: ["./formulario.component.scss"],
})
export class FormularioMesasComponent implements OnInit {
  form: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private toastService: ToastService
  ) {
    this.form = this.formBuilder.group({
      nome: ["", [Validators.required, Validators.minLength(2)]],
      qtdPessoas: ["", [Validators.required]],
    });
  }

  ngOnInit(): void {}

  cadastrar(): void {
    this.toastService.success({ mensagem: 'cadastrado!' });
    this.form.reset();
  }
}
