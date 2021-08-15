import { Component, OnInit } from "@angular/core";
import { Subscription } from "rxjs";

import { ToastService } from "../../services/toast/toast.service";

import { SafeHtml } from '@angular/platform-browser';
@Component({
  selector: "app-toast",
  templateUrl: "./toast.component.html",
  styleUrls: ["./toast.component.scss"],
})
export class ToastComponent implements OnInit {
  tipo: string;
  mensagem: string;
  show: boolean;
  html: SafeHtml;

  private mostrarToast$: Subscription;

  constructor(private toastServices: ToastService) {}

  ngOnDestroy(): void {
    if (this.mostrarToast$) {
      this.mostrarToast$.unsubscribe();
    }
  }

  ngOnInit(): void {
    this.mostrarToast$ = this.toastServices.mostrarToast$.subscribe((data) => {
      if (!data) {
        return;
      }
      this.show = true;
      this.tipo = data.tipo;
      this.mensagem = data.mensagem;
      this.html = data.html;

      this.removeToast(data.tempo);
    });
  }

  removeToast(tempo = 2000): void {
    setTimeout(() => {
      this.show = false;
    }, tempo);
  }
}
