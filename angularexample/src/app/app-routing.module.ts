import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppmainComponent } from "./components/appmain/appmain.component";

const routes: Routes = [
  {
    path: 'calendar',
    component: AppmainComponent
  },
  {
    path: '',
    redirectTo: '/calendar',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
