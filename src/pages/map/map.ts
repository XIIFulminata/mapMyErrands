/**
 * Created by Paulomi on 11/12/16.
 */
import { Component } from '@angular/core';
import {Geolocation} from 'ionic-native';
import { ToDoService } from '../../services/todo.service';
import {ToDo} from "../../components/todo";


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

