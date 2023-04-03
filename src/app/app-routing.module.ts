import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MfHeaderComponent } from './mf-header/mf-header.component';

const routes: Routes = [
  {
    path: 'home',
    component: MfHeaderComponent,
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
