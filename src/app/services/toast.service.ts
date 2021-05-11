import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';

import { Toast } from './../interfaces/toast.interface';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  mostrarToast: BehaviorSubject<Toast> = new BehaviorSubject<Toast>(null);
  mostrarToast$: Observable<Toast> = this.mostrarToast.asObservable();

  constructor() {}

  success(params: Toast): void {
    this.mostrarToast.next({
      tipo: 'success',
      mensagem: params.mensagem,
      tempo: params.tempo,
    });
  }

  warning(params: Toast): void {
    this.mostrarToast.next({
      tipo: 'warning',
      mensagem: params.mensagem,
      tempo: params.tempo,
    });
  }
}
