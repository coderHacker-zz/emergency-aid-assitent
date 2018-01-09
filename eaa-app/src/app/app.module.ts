import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule, Routes} from '@angular/router';
import { AngularFireModule, AuthProviders, AuthMethods  } from 'angularfire2';
import {FirebaseService} from './services/firebase.service';
import {ExternalapiService} from './services/externalapi.service';
import {FlashMessagesModule} from 'angular2-flash-messages';
import {GoTopButtonModule} from 'ng2-go-top-button';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { Ng2ImgFallbackModule } from 'ng2-img-fallback';
import { CustomFormsModule } from 'ng2-validation';
import { Ng2PageTransitionModule } from "ng2-page-transition";


import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ReportincidentComponent } from './components/reportincident/reportincident.component';
import { IncidentdetailComponent } from './components/incidentdetail/incidentdetail.component';
import { IncidentlistingComponent } from './components/incidentlisting/incidentlisting.component';
import { FooterComponent } from './footer/footer.component';

// Must export the config
export const firebaseConfig = {
    apiKey: "AIzaSyAjmA-wqGeJi4E536s6dR4C6l5Gq9DTI_I",
    authDomain: "emergency-aid-assistant-c574a.firebaseapp.com",
    databaseURL: "https://emergency-aid-assistant-c574a.firebaseio.com",
    projectId: "emergency-aid-assistant-c574a",
    storageBucket: "emergency-aid-assistant-c574a.appspot.com",
    messagingSenderId: "490672151267"
};
const firebaseAuthConfig = {
  provider: AuthProviders.Google,
  method: AuthMethods.Popup
};
//routing 
const appRoutes: Routes = [
  {path:'', component:ReportincidentComponent},
  {path:'incidentlisting', component:IncidentlistingComponent},
  {path:'incidentdetail/:incidentid', component:IncidentdetailComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ReportincidentComponent,
    IncidentdetailComponent,
    IncidentlistingComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FlashMessagesModule,
    AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig),
    RouterModule.forRoot(appRoutes),
	  Ng2ImgFallbackModule,
    GoTopButtonModule,
	  BrowserAnimationsModule,
    CustomFormsModule,
    Ng2PageTransitionModule
  ],
  providers: [FirebaseService, ExternalapiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
