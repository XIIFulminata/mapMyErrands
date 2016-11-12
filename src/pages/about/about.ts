import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  items = [];
  deleteList(event){};

  constructor(public navCtrl: NavController) {

    this.items = ['Paul', 'Monzy', 'Nick', 'Jay'];
    this.deleteList = function (event) {
      this.items = [];
    }
  }

}
