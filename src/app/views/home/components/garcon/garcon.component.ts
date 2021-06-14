import { FormBuilder, FormGroup } from "@angular/forms";
import { startWith, map, take } from "rxjs/operators";
import { Observable } from "rxjs";
import { Component, OnInit } from "@angular/core";
import { faTrash, faPen } from "@fortawesome/free-solid-svg-icons";
import { Router } from "@angular/router";

import { ServiceService } from "@app/services/geral/service.service";
import { ToastService } from "@app/services/toast/toast.service";
import { Perfil } from './../../../../enums/perfil';

@Component({
  selector: "app-garcon",
  templateUrl: "./garcon.component.html",
  styleUrls: ["./garcon.component.scss"],
})
export class GarconComponent implements OnInit {
  faTrash = faTrash;
  faPen = faPen;

  filteredOptions: Observable<any[]>;
  filtroForm: FormGroup;
  adm: any;

  garcom: any[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private toastService: ToastService,
    private services: ServiceService
  ) {}

  ngOnInit(): void {
    let perfilId = Number(localStorage.getItem('perfilGuentai'));
    this.adm = Perfil[perfilId] === 'ADM' ? true : false;

    this.filtro();
    this.buscarFuncionario();
  }

  buscarFuncionario(){
    this.services
    .getFuncionarios()
    .pipe(take(1))
    .subscribe((suc: any[]) => {
      if(localStorage.getItem('tokenGuentai') === 'adm'){
        this.garcom = suc;
      }else{
        this.garcom = suc.filter((item) => item.perfilId === 2);
      }
      this.filtro();
    });
  }

  filtro() {
    this.filtroForm = this.formBuilder.group({
      filtro: [""],
    });

    this.filteredOptions = this.filtroForm.get("filtro").valueChanges.pipe(
      startWith(null),
      map((value) => this._filter(value))
    );
  }

  private _filter(value: string): any[] {
    if (!value) {
      return this.garcom;
    }

    const filterValue = value.toLowerCase();
    return this.garcom.filter((option) =>  option.nome.toLowerCase().includes(filterValue));
  }

  excluirGarcon(id: number): void {
    this.services
      .deleteFuncionarios(id)
      .pipe(take(1))
      .subscribe(
        (suc: any[]) => {
          this.buscarFuncionario();
          this.toastService.success({ mensagem: "excluido!" });
        },
        (err: any) => this.toastService.warning({ mensagem: "erro inesperado" })
      );
  }

  alterarGarcon(id: string): void {
    localStorage.setItem('idGarcom', id);
    this.router.navigate(["/home", { outlets: { home: ["garcom-cadastro"]}}]);
  }

  cadastrar(): void {
    this.router.navigate(["/home", { outlets: { home: ["garcom-cadastro"] } }]);
  }
}
