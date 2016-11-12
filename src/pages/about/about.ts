import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import {MapPage} from "../map/map";

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  items = [];
  deleteList(event){};
  editList(event){};
  showEditIcons = false;
  removeItem(item){};
  editItem(item){};
  goToMapView(){};
  mapPage = MapPage;

  constructor(public navCtrl: NavController) {

    this.showEditIcons = false;

    this.items = [{"id": "1", "name":'Paul'},
      {"id": "2", "name":'Nick'},
      {"id": "3", "name":'Monzy'},
      {"id": "4", "name":'Jay'}];
    this.deleteList = function (event) {
      this.items = [];
    }
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
    };

    this.editItem = function(item){
      //Wait for monzy
    };

    this.goToMapView = function () {
      //Save to factory

    };
  }

}
