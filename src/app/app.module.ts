import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

import { routers } from "./app.routing";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./views/login/login.component";
import { ToastComponent } from "./components/toast/toast.component";
import { PdfComponent } from './views/pdf/pdf.component';

@NgModule({
  declarations: [AppComponent, LoginComponent, ToastComponent, PdfComponent],
  imports: [
    routers,
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    FontAwesomeModule,
  ],
  providers: [ToastComponent, HttpClient],
  bootstrap: [AppComponent],
})
export class AppModule {}
