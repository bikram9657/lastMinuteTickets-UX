import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header.component';
import { LoginModule } from '../login/login.module';
import { HeaderRoutingModule } from './header-routing.module';


@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    LoginModule,
    HeaderRoutingModule
  ]
})
export class HeaderModule { }
