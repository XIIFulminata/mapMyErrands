import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { AboutPage } from '../about/about';
import { HistoryPage } from '../history/history';

import { Events } from 'ionic-angular';
import {ToDoService} from "../../services/todo.service";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = HomePage;
  tab2Root: any = AboutPage;
  tab3Root: any = HistoryPage;

  myMethod(){};

  constructor(public events: Events) {

    this.myMethod = function () {
      events.publish('Items from TodoService');
    };
  }
}
