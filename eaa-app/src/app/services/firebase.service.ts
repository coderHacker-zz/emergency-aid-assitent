import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import * as firebase from 'firebase';

@Injectable()
export class FirebaseService {
  dblist: FirebaseListObservable<any[]>;
  dblistrow: FirebaseObjectObservable<any>;
  imagefolder: any;

  constructor(private af: AngularFire) {
    this.imagefolder = 'incident_images';
    // this.dblist = this.af.database.list('/incident-master') as FirebaseListObservable<Incident[]>
  }
  
  getIncidentListing(){
    this.dblist = this.af.database.list('/incident-master') as FirebaseListObservable<Incident[]>
    return this.dblist;
  }
  getRegistrationListing(){
    this.dblist = this.af.database.list('/registration-master') as FirebaseListObservable<Registration[]>
    return this.dblist;
  }
  getMappingListing(){
    this.dblist = this.af.database.list('/registration-incident-mapping') as FirebaseListObservable<RegistrationIncidentMapping[]>
    return this.dblist;
  }  
  getIncidentDetails(id){
    this.dblistrow = this.af.database.object('/incident-master/'+id) as FirebaseObjectObservable<Incident>
    return this.dblistrow;
  }  
  getRegistrationDetails(id){
    this.dblistrow = this.af.database.object('/registration-incident-mapping/'+id) as FirebaseObjectObservable<RegistrationIncidentMapping>
    return this.dblistrow;
  }

   addIncident(incidentObj){
    this.dblist = this.af.database.list('/incident-master');
    // Create root ref
    let storageRef = firebase.storage().ref();
    
    for(let selectedFile of [(<HTMLInputElement>document.getElementById('image')).files[0]]){
      let path = `/${this.imagefolder}/${selectedFile.name}`;
      let iRef = storageRef.child(path);
      iRef.put(selectedFile).then((snapshot) => {
        incidentObj.incident_image_path = path;
        return this.dblist.push(incidentObj);
      });
    }
  }
  addRegistration(userInfoObj) {
    console.log(userInfoObj);
    this.dblist = this.af.database.list('/registration-master');
    let registrationObj = {
      registration_email : userInfoObj.auth.email,
      registration_displayname : userInfoObj.auth.displayName,
      registration_photoURL : userInfoObj.auth.photoURL,
      creation_date : new Date().toUTCString()
    }
    return this.dblist.push(registrationObj);
    // console.log(registrationObj);
  }
  updateIncident(id, dblistrow){
    return this.dblist.update(id, dblistrow);
  }

  deleteListing(id){
    return this.dblist.remove(id);
  }
  
  //////////////////utility functions////////////////
  //retuns the object row if finds a match in the list
  searchInList(list:any[], objkey, objvalue) {
    let flag = 0, index, obj, listSize = list.length;
    for(index = 0; index < listSize; index++) {
      obj = list[index];
      if(obj.hasOwnProperty(objkey)) {
        if(obj[objkey] === objvalue){
          flag = 1;
          obj.searchResult = true;
          return obj;
        }
      }
    }
    if(flag === 0) {
      obj = {};
      obj.searchResult = false;
      return obj;
    }
  }
}

interface Incident{
  $key?:string;
  incident_desc?:string;
  incident_image_path?:string;
  incident_lat?:string;
  incident_long?:string;
  incident_city?:string;
  creation_by?:string; //registration_email
  creation_date?:string;
  modified_date?:string;
}
interface Registration{
  $key?:string;
  registration_email?:string;
  registration_displayname?:string;
  registration_photoURL?:string;
  creation_date?:string;
}
interface RegistrationIncidentMapping{
  $key?:string;
  registration_key?:string;
  incident_key?:string;
  creation_date?:string;
}