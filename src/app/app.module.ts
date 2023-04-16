import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModule } from './header/header.module';
import { LoginModule } from './login/login.module';
import { EmailService } from './services/email.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    LoginModule,
    HttpClientModule
  ],
  providers: [EmailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
