import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-fila",
  templateUrl: "./fila.component.html",
  styleUrls: ["./fila.component.scss"],
})
export class FilaComponent implements OnInit {
  totalPessoas: number = 8;
  mesasLivre: number[] = [1, 2, 3];
  fila: any[] = [
    {
      nome: "Kelvin",
      nPessoas: 4,
    },
    {
      nome: "Danilo",
      nPessoas: 2,
    },
    {
      nome: "Rogerio",
      nPessoas: 2,
    },
    {
      nome: "William",
      nPessoas: 24,
    },
    {
      nome: "Kelvin",
      nPessoas: 4,
    },
    {
      nome: "Danilo",
      nPessoas: 2,
    },
    {
      nome: "Rogerio",
      nPessoas: 2,
    },
    {
      nome: "William",
      nPessoas: 24,
    },
    {
      nome: "Kelvin",
      nPessoas: 4,
    },
    {
      nome: "Danilo",
      nPessoas: 2,
    },
    {
      nome: "Rogerio",
      nPessoas: 2,
    },
    {
      nome: "William",
      nPessoas: 24,
    },
    {
      nome: "Kelvin",
      nPessoas: 4,
    },
    {
      nome: "Danilo",
      nPessoas: 2,
    },
    {
      nome: "Rogerio",
      nPessoas: 2,
    },
    {
      nome: "William",
      nPessoas: 24,
    },
    {
      nome: "Kelvin",
      nPessoas: 4,
    },
    {
      nome: "Danilo",
      nPessoas: 2,
    },
    {
      nome: "Rogerio",
      nPessoas: 2,
    },
    {
      nome: "William",
      nPessoas: 24,
    },
    {
      nome: "Kelvin",
      nPessoas: 4,
    },
    {
      nome: "Danilo",
      nPessoas: 2,
    },
    {
      nome: "Rogerio",
      nPessoas: 2,
    },
    {
      nome: "William",
      nPessoas: 24,
    },
    {
      nome: "Kelvin",
      nPessoas: 4,
    },
    {
      nome: "Danilo",
      nPessoas: 2,
    },
    {
      nome: "Rogerio",
      nPessoas: 2,
    },
    {
      nome: "William",
      nPessoas: 24,
    },

  ];

  constructor() {}

  ngOnInit(): void {}
}
