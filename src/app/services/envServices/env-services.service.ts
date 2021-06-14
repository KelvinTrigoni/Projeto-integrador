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
      console.log('HOMOLOG');      
      return this.env = {
        "guentai":{
          api: environment.guentai
        }
      }
    }else{
      console.log('PROD');
      return this.env = {
        "guentai":{
          api: envProd.guentai
        }
      }
    }
  }
}
