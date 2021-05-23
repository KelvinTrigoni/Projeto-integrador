import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import { ToastService } from '../../../../../../services/toast/toast.service';

@Component({
  selector: 'app-formulario-fila',
  templateUrl: './formulario-fila.component.html',
  styleUrls: ['./formulario-fila.component.scss']
})
export class FormularioFilaComponent implements OnInit {
  form: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private toastService: ToastService
  ) {
    this.form = this.formBuilder.group({
      nome: ["", [Validators.required, Validators.minLength(2)]],
      acompanhantes: ["",[Validators.required]],
    });
  }

  ngOnInit(): void {}

  cadastrar(): void {
    this.toastService.success({ mensagem: 'cadastrado!' });
    this.form.reset();
  }
}
