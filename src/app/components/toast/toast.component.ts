import { Component, OnInit } from '@angular/core';

import { ToastService } from './../../services/toast.service';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
})
export class ToastComponent implements OnInit {
  tipo: string;
  mensagem: string;
  show: boolean;

  constructor(private toastServices: ToastService) {}

  ngOnInit(): void {
    this.toastServices.mostrarToast$.subscribe((data) => {
      if (!data) {
        return;
      }
      this.show = true;
      this.tipo = data.tipo;
      this.mensagem = data.mensagem;

      this.removeToast(data.tempo);
    });
  }

  removeToast(tempo = 2000): void {
    setTimeout(() => {
      this.show = false;
    }, tempo);
  }
}
