import { SafeHtml } from '@angular/platform-browser';
export interface Toast {
  tipo?: string;
  mensagem?: string;
  tempo?: number;
  html?: SafeHtml;
}
