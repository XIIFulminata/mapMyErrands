import {Component, ViewChild, OnInit, ElementRef} from '@angular/core';

import { NavController } from 'ionic-angular';
import { ToDoService } from '../../services/todo.service';
import {ToDo} from "../../components/todo";
import {MapsAPILoader} from "angular2-google-maps/core";



@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers:[ToDoService]
})
export class HomePage implements OnInit{
  todos: ToDo[];
  addToDo(type){};
  mapLocation = {};
  getTodos(){};

  @ViewChild("search")
  public searchElementRef: ElementRef;

  constructor(public navCtrl: NavController, private ToDoService: ToDoService, private mapsAPILoader: MapsAPILoader) {
    this.addToDo = function (type) {
      ToDoService.addToDo({
        id: Date.now(),
        type: type,
        item: this.item,
        displayName: type + ' ' + this.item + ' at ' + this.mapLocation.placeName,
        //location: {lat: 34, lng: 45, placeName: this.location, address: "123 Common Ave", placeID: 34555}
        location : this.mapLocation
      });
      this.item = '';
      this.location = '';
      //console.log(getTodos());
      //getTodos();

      this.getTodos = function () {
        this.todos = ToDoService.getToDos();
        console.log(this.todos);
      }

    };
  }

      ngOnInit(): void {
        this.mapsAPILoader.load().then(() => {
          let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
            types: ["address"]
          });
          autocomplete.addListener("place_changed", () => {
            //get the place result
            let place: google.maps.places.PlaceResult = autocomplete.getPlace();

            //set latitude and longitude
            //this.latitude = place.geometry.location.lat();
            if (place) {
              this.mapLocation = {
                lat: place.geometry.location.lat(),
                lng: place.geometry.location.lng(),
                placeName: place.name,
                address: place.formatted_address,
                placeID: place.place_id
              }
            }
            console.log(place);
            console.log("LAT:::: " + place.geometry.location.lat());
            console.log("LNG::::" + place.geometry.location.lng());
            //this.longitude = place.geometry.location.lng();
          });
        });
      }
      /*getTodos() {
        this.todos = this.ToDoService.getToDos();
        console.log(this.todos);
      }*/
}


/*export class HomePage {
 todos: ToDo[];

 constructor(public navCtrl: NavController, private ToDoService: ToDoService) {

 }
 ngOnInit(): void {
 this.getTodos();
 }
 getTodos() {
 this.todos = this.ToDoService.getToDos();
 console.log(this.todos);
 }
 addToDo(type: string, item: string, location: string) {
 this.ToDoService.addToDo({
 type: type,
 item: item,
 displayName: type + ' ' + item + ' at ' +  location,
 location: {lat: 34, lng: 45, placeName: location, address: "123 Common Ave", placeID: 34555}
 });
 item = '';
 location = '';
 console.log(this.todos);
 };


 }*/
