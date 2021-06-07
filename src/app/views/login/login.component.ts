import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { ToastService } from '../../services/toast/toast.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  login = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    senha: new FormControl('', [Validators.required]),
  });

  constructor(
    private toastService: ToastService,
    private router: Router,
  ) {}

  ngOnInit(): void {}

  public entrar(): void {
    const email = this.login.controls.email;
    const senha = this.login.controls.senha;


    if (this.validarForm({ email, senha })) {
      return;
    }
    if(senha.value === 'adm'){
      localStorage.setItem('tokenGuentai','adm');
    }else{
      localStorage.setItem('tokenGuentai','123');
    }

    this.toastService.success({ mensagem: 'Logado!' });
    this.router.navigate(['/home', {outlets: {home: ['fila']}}]);
  }

  private validarForm(obj: { email: any; senha: any }): boolean {
    const { email, senha } = obj;

    if (!email.value) {
      this.toastService.warning({ mensagem: 'Email é obrigatória!' });
      return true;
    }
    if (email.status === 'INVALID') {
      this.toastService.warning({ mensagem: 'Email inválido!' });
      return true;
    }
    if (senha.status === 'INVALID') {
      this.toastService.warning({ mensagem: 'Senha é obrigatória!' });
      return true;
    }
    return false;
  }
}
