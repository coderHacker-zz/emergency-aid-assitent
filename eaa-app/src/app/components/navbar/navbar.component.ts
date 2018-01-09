import { Component, OnInit } from '@angular/core';
import {AngularFire} from 'angularfire2';
import {FlashMessagesService} from 'angular2-flash-messages';
import {FirebaseService} from '../../services/firebase.service';
import * as firebase from 'firebase';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  registrationRecord : any;
  registrationListing : any;
  constructor(
    public af:AngularFire,
    public flashMessage:FlashMessagesService,
    private firebaseService: FirebaseService
  ) {
      // this will provide you auth information
      this.af.auth.subscribe(auth =>{
        console.log(auth);
        if(auth) {
          this.flashMessage.show('Hi '+ auth.auth.displayName +'; Welcome to Emergency AID Assistant!!',{cssClass: 'alert-success', timeout: 3000});
          this.registrationRecord = auth;
        }          
      });
    }

  ngOnInit() {
        this.firebaseService.getRegistrationListing().subscribe(registrationListing => {
          console.log(registrationListing);
          this.registrationListing = registrationListing;

          // this will provide you auth information
          this.af.auth.subscribe(auth =>{
            console.log(auth);
            if(auth) {
              console.log('ngOnInit()');
              let searchResponseObj = this.firebaseService.searchInList(this.registrationListing, 'registration_email', this.registrationRecord.auth.email);
              console.log(searchResponseObj);
              if(!searchResponseObj.searchResult) {
                //on success: flash notification
                this.firebaseService.addRegistration(this.registrationRecord);
              }
            }
        });
      });

  }
  login(){
    this.af.auth.login();
  }
  logout(){
    this.af.auth.logout();
    this.flashMessage.show('you have logged out!!',{cssClass: 'alert-success', timeout: 3000});
  }

}
