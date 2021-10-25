import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http"
import {AngularFireModule} from "@angular/fire/compat";
import { AngularFireAnalyticsModule } from '@angular/fire/compat/analytics';
import {AngularFirestoreModule} from "@angular/fire/compat/firestore"

import { BooksService } from './services/books.service';
import { CustomersService } from './services/customers.service';

import { AppRoutingModule,routingComponents } from './app-routing.module';


import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { MyLibraryComponent } from './components/my-library/my-library.component';
import { MyFilterPipePipe } from './my-filter-pipe.pipe';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAnalytics,getAnalytics,ScreenTrackingService,UserTrackingService } from '@angular/fire/analytics';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideFunctions,getFunctions } from '@angular/fire/functions';
import { provideMessaging,getMessaging } from '@angular/fire/messaging';
import { providePerformance,getPerformance } from '@angular/fire/performance';
import { provideRemoteConfig,getRemoteConfig } from '@angular/fire/remote-config';
import { provideStorage,getStorage } from '@angular/fire/storage';


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
    FontAwesomeModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAnalyticsModule ,
    AngularFirestoreModule,

    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAnalytics(() => getAnalytics()),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore()),
    provideFunctions(() => getFunctions()),
    provideMessaging(() => getMessaging()),
    providePerformance(() => getPerformance()),
    provideRemoteConfig(() => getRemoteConfig()),
    provideStorage(() => getStorage())
  ],
  providers: [CustomersService,BooksService, ScreenTrackingService,UserTrackingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
