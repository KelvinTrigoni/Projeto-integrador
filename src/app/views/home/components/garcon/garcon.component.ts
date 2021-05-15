import { FormBuilder, FormGroup } from '@angular/forms';
import { startWith, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Component, OnInit } from "@angular/core";
import { faTrash, faPen } from '@fortawesome/free-solid-svg-icons';

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

  garcom: any[] = [
    {
      id: 'dasdasd',
      nome: "Enzam",
      jornadaDe: "14:00:00",
      jornadaAte: "21:00:00",
    },
    {
      id: 'dasdasd',
      nome: "Kelvin",
      jornadaDe: "14:00:00",
      jornadaAte: "21:00:00",
    },
    {
      id: 'dasdasd',
      nome: "Hendrao",
      jornadaDe: "14:00:00",
      jornadaAte: "21:00:00",
    },
    {
      id: 'dasdasd',
      nome: "Will",
      jornadaDe: "14:00:00",
      jornadaAte: "21:00:00",
    },
    {
      id: 'dasdasd',
      nome: "Danilo",
      jornadaDe: "14:00:00",
      jornadaAte: "21:00:00",
    },
    {
      id: 'dasdasd',
      nome: "Rogerio",
      jornadaDe: "14:00:00",
      jornadaAte: "21:00:00",
    },
    {
      id: 'dasdasd',
      nome: "Misterios",
      jornadaDe: "14:00:00",
      jornadaAte: "21:00:00",
    },
    {
      id: 'dasdasd',
      nome: "Enzam",
      jornadaDe: "14:00:00",
      jornadaAte: "21:00:00",
    },
    {
      id: 'dasdasd',
      nome: "Kelvin",
      jornadaDe: "14:00:00",
      jornadaAte: "21:00:00",
    },
    {
      id: 'dasdasd',
      nome: "Hendrao",
      jornadaDe: "14:00:00",
      jornadaAte: "21:00:00",
    },
    {
      id: 'dasdasd',
      nome: "Will",
      jornadaDe: "14:00:00",
      jornadaAte: "21:00:00",
    },
    {
      id: 'dasdasd',
      nome: "Danilo",
      jornadaDe: "14:00:00",
      jornadaAte: "21:00:00",
    },
    {
      id: 'dasdasd',
      nome: "Rogerio",
      jornadaDe: "14:00:00",
      jornadaAte: "21:00:00",
    },
    {
      id: 'dasdasd',
      nome: "Misterios",
      jornadaDe: "14:00:00",
      jornadaAte: "21:00:00",
    },
  ];
  constructor(
    private formBuilder: FormBuilder,
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
}
