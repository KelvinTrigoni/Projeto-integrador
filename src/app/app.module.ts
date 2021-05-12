import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { routers } from './app.routing';
import { AppComponent } from './app.component';
import { LoginComponent } from './views/login/login.component';
import { ToastComponent } from './components/toast/toast.component';

@NgModule({
  declarations: [AppComponent, LoginComponent, ToastComponent],
  imports: [routers, BrowserModule, ReactiveFormsModule, HttpClientModule],
  providers: [ToastComponent, HttpClient],
  bootstrap: [AppComponent],
})
export class AppModule {}
