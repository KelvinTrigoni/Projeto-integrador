import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { EnvServicesService } from '../envServices/env-services.service';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  constructor(
    private http: HttpClient,
    private envServices: EnvServicesService
  ) {}


  private getHttpOptions(){
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json',  'Authorization': `Bearer ${localStorage.getItem('tokenGuentai')}` }),
    };
    return httpOptions;
  }

  public login(body: any): Observable<any>{
    return this.http.post(`${this.envServices.env["guentai"].api}/account/login`,body);
  }

  public postClienteMesa(body: any): Observable<any>{
    return this.http.post(`${this.envServices.env["guentai"].api}/ClienteMesa`,body , this.getHttpOptions());
  }

  public postMesa(body: any): Observable<any>{
    return this.http.post(`${this.envServices.env["guentai"].api}/Mesa`,body , this.getHttpOptions());
  }

  public getByIdMesa(id: number): Observable<any>{
    return this.http.get(`${this.envServices.env["guentai"].api}/Mesa/${id}`, this.getHttpOptions());
  }

  public getMesa(): Observable<any>{
    return this.http.get(`${this.envServices.env["guentai"].api}/Mesa`, this.getHttpOptions());
  }

  public putMesa(body: any): Observable<any>{
    return this.http.put(`${this.envServices.env["guentai"].api}/Mesa/${body.id}`,body , this.getHttpOptions());
  }

  public deleteMesa(id: number): Observable<any>{
    return this.http.delete(`${this.envServices.env["guentai"].api}/Mesa/${id}`, this.getHttpOptions());
  }

  public putCliente(body: any): Observable<any>{
    return this.http.put(`${this.envServices.env["guentai"].api}/Cliente/${body.id}`, body, this.getHttpOptions());
  }

  public postCliente(body: any): Observable<any>{
    return this.http.post(`${this.envServices.env["guentai"].api}/Cliente`, body, this.getHttpOptions());
  }

  public deleteCliente(id: number): Observable<any>{
    return this.http.delete(`${this.envServices.env["guentai"].api}/Cliente/${id}`, this.getHttpOptions());
  }

  public getCliente(): Observable<any>{
    return this.http.get(`${this.envServices.env["guentai"].api}/Cliente`, this.getHttpOptions());
  }

  public getByQtdCliente(qtd: number): Observable<any>{
    return this.http.get(`${this.envServices.env["guentai"].api}/Cliente/qtdPessoas/${qtd}`, this.getHttpOptions());
  }

  public getByIdCliente(id: number): Observable<any>{
    return this.http.get(`${this.envServices.env["guentai"].api}/Cliente/${id}`, this.getHttpOptions());
  }

  public getByIdFuncionarios(id: number): Observable<any>{
    return this.http.get(`${this.envServices.env["guentai"].api}/Funcionario/${id}`, this.getHttpOptions());
  }

  public getFuncionarios(): Observable<any>{
    return this.http.get(`${this.envServices.env["guentai"].api}/Funcionario`, this.getHttpOptions());
  }

  public postFuncionarios(body: any): Observable<any>{
    return this.http.post(`${this.envServices.env["guentai"].api}/Funcionario`, body, this.getHttpOptions());
  }

  public putFuncionarios(body: any): Observable<any>{
    return this.http.put(`${this.envServices.env["guentai"].api}/Funcionario/${body.id}`, body, this.getHttpOptions());
  }

  public deleteFuncionarios(id: number): Observable<any>{
    return this.http.delete(`${this.envServices.env["guentai"].api}/Funcionario/${id}`, this.getHttpOptions());
  }

  public getPerfil(): Observable<any>{
    return this.http.get(`${this.envServices.env["guentai"].api}/Perfil`, this.getHttpOptions());
  }
}
