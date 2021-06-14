import { FormBuilder, FormGroup } from "@angular/forms";
import { startWith, map, take } from "rxjs/operators";
import { Observable } from "rxjs";
import { Component, OnInit } from "@angular/core";
import { faTrash, faPen } from "@fortawesome/free-solid-svg-icons";
import { Router } from "@angular/router";

import { ToastService } from "@app/services/toast/toast.service";
import { ServiceService } from "@app/services/geral/service.service";

@Component({
  selector: "app-mesas",
  templateUrl: "./mesas.component.html",
  styleUrls: ["./mesas.component.scss"],
})
export class MesasComponent implements OnInit {
  faTrash = faTrash;
  faPen = faPen;

  filteredOptions: Observable<any[]>;
  filtroForm: FormGroup;

  mesa: any[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private toastService: ToastService,
    private services: ServiceService
  ) {}

  ngOnInit(): void {
    this.filtro();
    this.buscarMesas();
  }

  buscarMesas() {
    this.services
      .getMesa()
      .pipe(take(1))
      .subscribe((suc: any[]) => {
        this.mesa = suc;
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
      return this.mesa;
    }

    const filterValue = value.toLowerCase();
    return this.mesa.filter((option) =>
      option.descricao.toLowerCase().includes(filterValue)
    );
  }

  excluirMesa(id: number): void {
    this.services
      .deleteMesa(id)
      .pipe(take(1))
      .subscribe(
        (suc: any[]) => {
          this.buscarMesas();
          this.toastService.success({ mensagem: "excluido!" });
        },
        (err: any) => this.toastService.warning({ mensagem: "erro inesperado" })
      );
  }

  alterarMesa(id: string): void {
    localStorage.setItem('idMesa', id);
    this.router.navigate(["/home", { outlets: { home: ["mesas-cadastro"] } }]);
  }

  cadastrar(): void {
    this.router.navigate(["/home", { outlets: { home: ["mesas-cadastro"] } }]);
  }
}
