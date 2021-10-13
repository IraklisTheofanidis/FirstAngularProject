import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';


const routes:Routes=[
  {path:"",redirectTo:"/register",pathMatch:"full"},
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:"**",component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[RegisterComponent,LoginComponent,PageNotFoundComponent]
