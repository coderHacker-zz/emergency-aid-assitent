import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../../services/firebase.service';
import {Router, ActivatedRoute, Params} from '@angular/router';
import * as firebase from 'firebase';


@Component({
  selector: 'app-incidentlisting',
  templateUrl: './incidentlisting.component.html',
  styleUrls: ['./incidentlisting.component.scss']
})
export class IncidentlistingComponent implements OnInit {
  brokenPlaceholder = 'broken_placeholder';
  workingPlaceholder = './../assets/ripple.svg';

  onLoad(isFallback: boolean) {
    console.log(isFallback);
  }
  incidentlistings:any;
  // imageUrl:any;

  constructor(private firebaseService:FirebaseService) { }

  ngOnInit() {
    this.firebaseService.getIncidentListing().subscribe(incidentlisting => {
      console.log(incidentlisting);
      this.incidentlistings = incidentlisting;
      console.log(this.incidentlistings);

      /*******************fetch image from storage******************/
      //set imageurl via storage API
      // let storageRef = firebase.storage().ref();
      // let serverImagePath, index, incidentobj, listSize = incidentlisting.length;
      // for(index = 0; index < listSize; index++) {
      //   incidentobj = incidentlisting[index];
      //   console.log(incidentlisting[index]);
      //   if(incidentlisting[index].hasOwnProperty('incident_image_path')) {
      //     console.log(incidentlisting[index].incident_image_path);
      //     console.log(incidentlisting[index]['incident_image_path']);
      //     if(incidentlisting[index].incident_image_path !== undefined && incidentlisting[index].incident_image_path !== ''){
      //       // let storageRef = firebase.storage().ref(); console.log(storageRef);
      //       serverImagePath = storageRef.child(incidentlisting[index].incident_image_path); console.log(serverImagePath);
      //       console.log(incidentlisting[index].incident_image_path);  //same image at all occurence
      //       serverImagePath.getDownloadURL().then(url => {
      //         //Set image URl
      //         console.log(url);
      //         console.log(incidentobj);
      //         console.log(index); console.log(this.incidentlistings);
      //         console.log(this.incidentlistings[index]);
      //         this.incidentlistings[index]['imageUrl'] = url;
      //         console.log(this.incidentlistings[index]);
      //       }).catch((error) =>{
      //         console.log(error);
      //       });
      //     }
      //   }
      // }
      // this.incidentlistings = incidentlisting;
      // console.log(this.incidentlistings);
      //storage reference
      // let storageRef = firebase.storage().ref();
      // let serverImagePath = storageRef.child(this.incidentlistings[0].incident_image_path);
      // serverImagePath.getDownloadURL().then(url => {
      //   //Set image URl
      //   this.imageUrl = url;
      // }).catch((error) =>{
      //   console.log(error);
      // });      
    });
  }

}


