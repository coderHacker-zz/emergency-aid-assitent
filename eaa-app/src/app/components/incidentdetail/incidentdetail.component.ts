import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../../services/firebase.service';
import {Router, ActivatedRoute, Params} from '@angular/router';
import * as firebase from 'firebase';

@Component({
  selector: 'app-incidentdetail',
  templateUrl: './incidentdetail.component.html',
  styleUrls: ['./incidentdetail.component.scss']
})
export class IncidentdetailComponent implements OnInit {
  brokenPlaceholder = 'broken_placeholder';
  workingPlaceholder = './../assets/ripple.svg';

  onLoad(isFallback: boolean) {
    console.log(isFallback);
  }
  incidentDetail:any;
  id:any;
  imageUrl:any;
  constructor(
    private firebaseService:FirebaseService,
    private router:Router,
    private route:ActivatedRoute
    ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['incidentid'];

    this.firebaseService.getIncidentDetails(this.id).subscribe(incidentlisting => {
      console.log(incidentlisting);
      this.incidentDetail = incidentlisting;
      let storageRef = firebase.storage().ref();
      let spaceRef = storageRef.child(this.incidentDetail.incident_image_path);
      spaceRef.getDownloadURL().then((url) =>{
        //set image url
        this.imageUrl = url;
      }).catch((error) =>{
        console.log(error)
      })

    });
    //set imageurl via storage API
  }

}