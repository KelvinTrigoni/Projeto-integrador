import { Injectable, isDevMode } from '@angular/core';
import { environment } from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class EnvServicesService {
  constructor() { this.getEnvironment(); }
  env: object = {};

  getEnvironment(){
    if(isDevMode()){
      return this.env = {
        "guentai":{
          api: environment.guentai
        }
      }
    }
  }
}
