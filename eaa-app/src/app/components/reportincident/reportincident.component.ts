import { Component, OnInit } from '@angular/core';
import {FlashMessagesService} from 'angular2-flash-messages'
import {ExternalapiService} from '../../services/externalapi.service';
import {FirebaseService} from '../../services/firebase.service';
import {AngularFire} from 'angularfire2';
import {Router, ActivatedRoute, Params} from '@angular/router';
import * as firebase from 'firebase';

@Component({
  selector: 'app-reportincident',
  templateUrl: './reportincident.component.html',
  styleUrls: ['./reportincident.component.scss']
})
export class ReportincidentComponent implements OnInit {
  incidentlistings:any;
  registrationListing:any;
  mappingListing:any;
  creation_by:any;
  creation_date:any;
  incident_city:any;
  incident_desc:any;
  incident_image_path:any;
  incident_lat:any;
  incident_long:any;
  modified_date:any;
  constructor(
    public af:AngularFire,
    private firebaseService: FirebaseService,
    private router:Router,
    private route:ActivatedRoute,
    public flashMessage:FlashMessagesService,
  ) { 
    

  }

  ngOnInit() {}
  login(){
    this.af.auth.login();
  }
  onAddSubmit(){
    let incident = {
      incident_desc: this.incident_desc,
      incident_city:'',
      incident_lat:'',
      incident_long:'',
      creation_date : new Date().toUTCString()
     }

    this.firebaseService.addIncident(incident);

    this.router.navigate(['incidentlisting']);
  }
}

