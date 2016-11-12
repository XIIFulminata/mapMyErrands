import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  items = [];

  constructor(public navCtrl: NavController) {

    this.items = ['Paul', 'Monzy', 'Nick', 'Jay'];
  }

}
