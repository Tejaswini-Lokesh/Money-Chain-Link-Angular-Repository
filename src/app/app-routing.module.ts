import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';

const routes: Routes = [
  {path:'' , component:LoginComponent},
  {path: 'login' , component:LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: '',redirectTo:'/login',pathMatch:'full'},
  {path:'**',component: LoginComponent}

]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LoginComponent,RegisterComponent];