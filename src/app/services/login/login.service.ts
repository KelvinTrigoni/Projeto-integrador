import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { EnvServicesService } from '../envServices/env-services.service';
import { Login } from 'src/app/interfaces/login.interface';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(
    private http: HttpClient,
    private envServices: EnvServicesService
  ) {}

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  public autenticar(params: Login): Observable<any> {
    // return this.http.post(`${this.envServices.env["guentai"].api}`, params, this.httpOptions);
    return;
  }
}
