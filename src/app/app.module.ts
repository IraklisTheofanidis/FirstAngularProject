import { CustomersService } from './services/customers.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http"

import { AppRoutingModule,routingComponents } from './app-routing.module';


import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
   
    //PageNotFoundComponent,
     //RegisterComponent,
    //LoginComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [CustomersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
