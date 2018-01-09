import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ExternalapiService {
  // Resolve HTTP using the constructor
  constructor(private http: Http) { }

  // private instance variable to hold base url
  private geolocationAPIEndpoint = 'https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyAjmA-wqGeJi4E536s6dR4C6l5Gq9DTI_I';
  private geocodeAPIEndpoint = 'https://maps.googleapis.com/maps/api/geocode/json?latlng=40.714224,-73.961452&key=AIzaSyAjmA-wqGeJi4E536s6dR4C6l5Gq9DTI_I';
  private googlePlaceEndpoint = 'https://www.google.com/maps/place/40.714224,-73.961452';
    //returns geo location coordinates
  // getGeoLocation() {

  //   /**
  //    * Performs a request with `post` http method.
  //    */
  //   post(url: string, body: any, options?: RequestOptionsArgs): Observable<Response>;
  //        return this.http.post(this.geolocationAPIEndpoint)
  //                       // ...and calling .json() on the response to return data
  //                        .map((res:Response) => res.json())
  //                        //...errors if any
  //                        .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

  //    }
}