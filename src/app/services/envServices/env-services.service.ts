import { Injectable, isDevMode } from '@angular/core';
import { environment } from "../../../environments/environment";
import { environment as envProd } from "../../../environments/environment.prod";

@Injectable({
  providedIn: 'root'
})
export class EnvServicesService {
  constructor() { this.getEnvironment(); }
  env: any = {};

  getEnvironment(){
    if(isDevMode()){
      return this.env = {
        "guentai":{
          api: environment.guentai
        }
      }
    }else{
      return this.env = {
        "guentai":{
          api: envProd.guentai
        }
      }
    }
  }
}
