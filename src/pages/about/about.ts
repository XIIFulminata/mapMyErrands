import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import {MapPage} from "../map/map";
import { ToDoService } from '../../services/todo.service';
import { Events } from 'ionic-angular';
import {ToDo} from "../../components/todo";

@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
  providers: [ToDoService]
})
export class AboutPage {

  items = [];
  deleteList(event){};
  editList(event){};
  showEditIcons = false;
  removeItem(item){};
  editItem(item){};
  goToMapView(){};
  mapPage;

  constructor(public navCtrl: NavController, private ToDoService: ToDoService, public events: Events) {

    this.showEditIcons = false;

    this.mapPage = MapPage;

    this.items = ToDoService.getToDos();
    this.deleteList = function (event) {
      this.items = [];
        ToDoService.deleteAll();
    };

    this.editList = function (event) {
      console.log(this.showEditIcons);
      if(this.showEditIcons == false){
        this.showEditIcons = true;
      }else{
        this.showEditIcons = false;
      }
    };

    this.removeItem = function (item) {

      var index = this.items.indexOf(item);
      if(index == -1){
        return;
      }
      this.items.splice(index, 1);
      ToDoService.deleteTodo(item.id);
    };

    this.editItem = function(item){
      //Wait for maps
    };

    this.goToMapView = function () {
        navCtrl.push(MapPage);
    };

      events.subscribe('Items from TodoService', () => {
          // userEventData is an array of parameters, so grab our first and only arg
          console.log("I am listening");
          this.showEditIcons = false;
          this.items = ToDoService.getToDos();
      });
  }

    popView(){
        this.navCtrl.pop();
    }

}
