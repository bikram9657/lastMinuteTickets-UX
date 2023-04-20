import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModule } from './header/header.module';
import { LoginModule } from './login/login.module';
import { EmailService } from './services/email.service';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthModule, AuthHttpInterceptor  } from '@auth0/auth0-angular';
import { authConfig } from './auth_config';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    LoginModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AuthModule.forRoot({
      domain: authConfig.domain,
      clientId: authConfig.clientId,
      authorizationParams: {
        audience: authConfig.audience,
        redirect_uri: window.location.origin,
      },
      httpInterceptor: {
        allowedList: ['http://localhost:8080/*']
      },
    }),
  ],
  providers: [EmailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
