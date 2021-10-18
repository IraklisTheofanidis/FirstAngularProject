import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http"

import { BooksService } from './services/books.service';
import { CustomersService } from './services/customers.service';

import { AppRoutingModule,routingComponents } from './app-routing.module';


import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { MyLibraryComponent } from './components/my-library/my-library.component';
import { MyFilterPipePipe } from './my-filter-pipe.pipe';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    MyFilterPipePipe,
   
   
    //PageNotFoundComponent,
     //RegisterComponent,
    //LoginComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [CustomersService,BooksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
