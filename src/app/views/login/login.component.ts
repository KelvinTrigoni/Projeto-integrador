import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";

import { ToastService } from "@app/services/toast/toast.service";
import { ServiceService } from "@app/services/geral/service.service";
import { take } from "rxjs/operators";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  login = new FormGroup({
    username: new FormControl("", [Validators.required]),
    senha: new FormControl("", [Validators.required]),
  });

  constructor(
    private toastService: ToastService,
    private router: Router,
    private service: ServiceService
  ) {}

  ngOnInit(): void {}

  public entrar(): void {
    if (this.validarForm(this.login.value)) {
      return;
    }

    this.service
      .login(this.login.value)
      .pipe(take(1))
      .subscribe(
        (item) => {
          localStorage.setItem('tokenGuentai', item.token);
          localStorage.setItem('perfilGuentai', item.user.perfilId);
          this.router.navigate(["/home", { outlets: { home: ["fila"] } }]);
        },
        ({error}) =>{
          this.toastService.warning({ mensagem: error.message})
        }
      );
  }

  private validarForm(obj: { username: any; senha: any }): boolean {
    const { username, senha } = obj;

    if (!username) {
      this.toastService.warning({ mensagem: "Usuário é obrigatória!" });
      return true;
    }

    if (!senha) {
      this.toastService.warning({ mensagem: "Senha é obrigatória!" });
      return true;
    }

    return false;
  }
}
