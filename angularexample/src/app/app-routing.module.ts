import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { ExamplepageComponent } from './components/examplepage/examplepage.component';

const routes: Routes = [
  {
    path:"signin",
    component: SigninComponent
  },
  {
    path:"signup",
    component: SignupComponent
  },
  {
    path:"example",
    component: ExamplepageComponent
  },
  {
    path: "",
    redirectTo: "/signin",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
