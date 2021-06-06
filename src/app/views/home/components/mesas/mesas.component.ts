import { FormBuilder, FormGroup } from '@angular/forms';
import { startWith, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Component, OnInit } from "@angular/core";
import { faTrash, faPen } from '@fortawesome/free-solid-svg-icons';

import { Router } from '@angular/router';

@Component({
  selector: 'app-mesas',
  templateUrl: './mesas.component.html',
  styleUrls: ['./mesas.component.scss']
})
export class MesasComponent implements OnInit {
  faTrash = faTrash;
  faPen = faPen;

  filteredOptions: Observable<any[]>;
  filtroForm: FormGroup;

  garcom: any[] = [
    {
      id: 'asdfas',
      nome: "Mesa 1",
      qtdPessoas: 4,
    },
    {
      id: 'asdfas',
      nome: "Mesa 2",
      qtdPessoas: 4,
    },
    {
      id: 'asdfas',
      nome: "Mesa 3",
      qtdPessoas: 4,
    },
    {
      id: 'asdfas',
      nome: "Mesa 4",
      qtdPessoas: 4,
    },
    {
      id: 'asdfas',
      nome: "Mesa 5",
      qtdPessoas: 4,
    },
    {
      id: 'asdfas',
      nome: "Mesa 6",
      qtdPessoas: 4,
    },
    {
      id: 'asdfas',
      nome: "Mesa 7",
      qtdPessoas: 4,
    },
    {
      id: 'asdfas',
      nome: "Mesa 8",
      qtdPessoas: 4,
    },
    {
      id: 'asdfas',
      nome: "Mesa 9",
      qtdPessoas: 4,
    },
    {
      id: 'asdfas',
      nome: "Mesa 10",
      qtdPessoas: 4,
    },
    {
      id: 'asdfas',
      nome: "Mesa 11",
      qtdPessoas: 4,
    },
    {
      id: 'asdfas',
      nome: "Mesa 12",
      qtdPessoas: 4,
    },
  ];
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.filtro();
  }

  filtro(){
    this.filtroForm = this.formBuilder.group({
      filtro: [''],
    });

    this.filteredOptions = this.filtroForm.get('filtro').valueChanges.pipe(
      startWith(null),
      map((value) => this._filter(value)),
    );
  }

  private _filter(value: string): any[] {
    if (!value) {
      return this.garcom;
    }

    const filterValue = value.toLowerCase();
    return this.garcom.filter((option) => option.nome.toLowerCase().includes(filterValue));
  }

  excluirGarcon(id: string): void {
    console.log(id);
  }

  alterarGarcon(id: string): void {
    console.log(id);
  }

  cadastrar(): void {
    this.router.navigate(['/home', {outlets: {home: ['mesas-cadastro']}}]);
  }

}
