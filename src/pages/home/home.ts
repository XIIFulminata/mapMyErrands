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
  addToDo(type){};

  constructor(public navCtrl: NavController, private ToDoService: ToDoService) {
    //this.todos = this.ToDoService.getToDos();
    //console.log(this.todos);
    this.addToDo = function (type) {
      ToDoService.addToDo({
        id: Date.now(),
        type: type,
        item: this.item,
        displayName: type + ' ' + this.item + ' at ' + this.location,
        location: {lat: 34, lng: 45, placeName: this.location, address: "123 Common Ave", placeID: 34555}
      });
      this.item = '';
      this.location = '';
      console.log(this.todos);
    };
  }

      ngOnInit(): void {
        this.getTodos();
      }
      getTodos() {
        this.todos = this.ToDoService.getToDos();
        console.log(this.todos);
      }
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
