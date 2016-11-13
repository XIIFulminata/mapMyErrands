/**
 * Created by Paulomi on 11/12/16.
 */
import {Component, ViewChild, OnInit, ElementRef} from '@angular/core';
import {Geolocation} from 'ionic-native';
import { ToDoService } from '../../services/todo.service';
import {ToDo} from "../../components/todo";
/*import * as arcgisUtils from "esri/urlUtils";
import * as esriMap from 'esri/map';
import * as esriDirections from 'esri/dijit/Directions';
import * as esriDojoParser from 'dojo/parser';
import * as borderContainer from 'dijit/layout/BorderContainer';
import * as contentPane from 'dijit/layout/ContentPane';
import * as domRemedy from 'dojo/domReady!';*/
import {SebmGoogleMap} from 'angular2-google-maps/core';




import { NavController } from 'ionic-angular';

@Component({
    selector: 'page-map',
    templateUrl: 'map.html',
    providers:[ToDoService]
})
export class MapPage{
    items = [];
    directionService;
    directionsDisplay;

    initialize() {
    };

    calcRoute() {
    };


    constructor(public navCtrl: NavController, private ToDoService: ToDoService) {
        console.log(ToDoService.getCurrentLocation());
        this.items = ToDoService.getToDos();

        /*this.initialize = function () {
            this.directionsService = new google.maps.DirectionsService();
            this.directionsDisplay = new google.maps.DirectionsRenderer();
            let chicago = new google.maps.LatLng(41.850033, -87.6500523);
            let mapOptions = {
                zoom: 7,
                center: chicago
            };
            let map = new google.maps.Map(document.getElementById('map'), mapOptions);
            this.directionsDisplay.setMap(map);
            this.directionsDisplay.setPanel(document.getElementById('directionsPanel'));
        };
        this.initialize();

        this.calcRoute = function () {
            let start = "Yale University";
            let end = "Yale University";
            let request = {
                origin: start,
                destination: end,
                travelMode: 'DRIVING',
                waypoints: [{
                    location: "Stop & Shop",
                    stopover: true
                }, {
                    location: "Connecticut Post Mall",
                    stopover: true
                }],
                optimizeWaypoints: true
        };
            this.directionsService.route(request, function (response, status) {
                if (status == 'OK') {
                    this.directionsDisplay.setDirections(response);
                }
            });
        }

*/
    }

}

