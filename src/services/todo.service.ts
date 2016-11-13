import { Injectable } from '@angular/core';
import {ToDo} from "../components/todo";

@Injectable()
export class ToDoService {
    getCurrentLocation() {
        return {lat: 41.316017, lng: -72.929403};
    }
    getToDos(): ToDo[] {
        return TODOS;
    }
    addToDo(todo): void {
        TODOS.push(todo);
    }
    deleteAll(): void {
        TODOS = [];
    }
    deleteTodo(id): void {
        for(var i = 0; i < TODOS.length; i++) {
            if(TODOS[i].id == id) {
                TODOS.splice(i,1);
                console.log(TODOS);
                return;
            }
        }
    }
}

let TODOS: ToDo[] = [
    {
        id: 34556,
        type: "buy",
        item: 11,
        displayName: 'Buy apples at Stop and Shop',
        location: {lat: 41.316017, lng: -72.929403, placeName: "Stop and Shop", address: "123 Common Ave", placeID: 34555}
    },

];
