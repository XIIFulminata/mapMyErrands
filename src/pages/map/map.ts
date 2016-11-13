/**
 * Created by Paulomi on 11/12/16.
 */
import { Component } from '@angular/core';
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
export class MapPage {

    constructor(public navCtrl: NavController, private ToDoService: ToDoService) {
        console.log(ToDoService.getCurrentLocation());
    }
}

