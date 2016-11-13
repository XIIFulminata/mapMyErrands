import { Injectable } from '@angular/core';
import {ToDo} from "../components/todo";

@Injectable()
export class ToDoService {
    getToDos(): ToDo[] {
        return TODOS;
    }
    addToDo(todo): void {
        TODOS.push(todo);
    }
}

export const TODOS: ToDo[] = [
    {
        type: "buy",
        item: 11,
        displayName: 'Buy apples at Stop and Shop',
        location: {lat: 34, lng: 45, placeName: "Stop and Shop", address: "123 Common Ave", placeID: 34555}
    },

];
