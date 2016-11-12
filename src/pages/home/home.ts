import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { ToDoService } from '../../services/todo.service';
import {ToDo} from "../../components/todo";



@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers:[ToDoService]
})
export class HomePage {
  todos: ToDo[];

  constructor(public navCtrl: NavController, private ToDoService: ToDoService) {
    //getToDos(): void {
      this.todos = this.ToDoService.getToDos();
    console.log(this.todos);
    this.ToDoService.addToDo({
      type: "get",
      item: 16,
      displayName: 'Nice',
      location: {lat: 56, lng: 45, placeName: "Stop and Shop", address: "123 Common Ave", placeID: 34555}
    });
    console.log('secondar');
    console.log(this.todos);
    //}
  }

}
