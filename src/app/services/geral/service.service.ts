import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { EnvServicesService } from '../envServices/env-services.service';
import { Login } from 'src/app/interfaces/login.interface';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(
    private http: HttpClient,
    private envServices: EnvServicesService
  ) {}

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  // public autenticar(params: Login): Observable<any> {
  //   // return this.http.post(`${this.envServices.env["guentai"].api}`, params, this.httpOptions);
  //   return;
  // }

  public postClienteMesa(body: any): Observable<any>{
    return this.http.post(`${this.envServices.env["guentai"].api}/ClienteMesa`,body , this.httpOptions);
  }

  public postMesa(body: any): Observable<any>{
    return this.http.post(`${this.envServices.env["guentai"].api}/Mesa`,body , this.httpOptions);
  }

  public getByIdMesa(id: number): Observable<any>{
    return this.http.get(`${this.envServices.env["guentai"].api}/Mesa/${id}`, this.httpOptions);
  }

  public getMesa(): Observable<any>{
    return this.http.get(`${this.envServices.env["guentai"].api}/Mesa`, this.httpOptions);
  }

  public putMesa(body: any): Observable<any>{
    return this.http.put(`${this.envServices.env["guentai"].api}/Mesa/${body.id}`,body , this.httpOptions);
  }

  public deleteMesa(id: number): Observable<any>{
    return this.http.delete(`${this.envServices.env["guentai"].api}/Mesa/${id}`, this.httpOptions);
  }

  public putCliente(body: any): Observable<any>{
    return this.http.put(`${this.envServices.env["guentai"].api}/Cliente/${body.id}`, body, this.httpOptions);
  }

  public postCliente(body: any): Observable<any>{
    return this.http.post(`${this.envServices.env["guentai"].api}/Cliente`, body, this.httpOptions);
  }

  public deleteCliente(id: number): Observable<any>{
    return this.http.delete(`${this.envServices.env["guentai"].api}/Cliente/${id}`, this.httpOptions);
  }

  public getCliente(): Observable<any>{
    return this.http.get(`${this.envServices.env["guentai"].api}/Cliente`, this.httpOptions);
  }

  public getByQtdCliente(qtd: number): Observable<any>{
    return this.http.get(`${this.envServices.env["guentai"].api}/Cliente/qtdPessoas/${qtd}`, this.httpOptions);
  }

  public getByIdCliente(id: number): Observable<any>{
    return this.http.get(`${this.envServices.env["guentai"].api}/Cliente/${id}`, this.httpOptions);
  }

  public getByIdFuncionarios(id: number): Observable<any>{
    return this.http.get(`${this.envServices.env["guentai"].api}/Funcionario/${id}`, this.httpOptions);
  }

  public getFuncionarios(): Observable<any>{
    return this.http.get(`${this.envServices.env["guentai"].api}/Funcionario`, this.httpOptions);
  }

  public postFuncionarios(body: any): Observable<any>{
    return this.http.post(`${this.envServices.env["guentai"].api}/Funcionario`, body, this.httpOptions);
  }

  public putFuncionarios(body: any): Observable<any>{
    return this.http.put(`${this.envServices.env["guentai"].api}/Funcionario/${body.id}`, body, this.httpOptions);
  }

  public deleteFuncionarios(id: number): Observable<any>{
    return this.http.delete(`${this.envServices.env["guentai"].api}/Funcionario/${id}`, this.httpOptions);
  }

  public getPerfil(): Observable<any>{
    return this.http.get(`${this.envServices.env["guentai"].api}/Perfil`, this.httpOptions);
  }
}
