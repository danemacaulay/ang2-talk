/// <reference path="typings/angular2/angular2.d.ts" />
import {Component, View, bootstrap, For, If} from 'angular2/angular2';

@Component({
  selector: 'todo-list'
})
@View({
  template: `
    <ul>
      <li *for="#todo of todos">
        {{ todo }}
      </li>
    </ul>

    <input #todotext (keyup)="doneTyping($event)">
    <button (click)="addTodo(todotext)">Add Todo</button>
          `,
  directives: [For]
})

class TodoList {
  todos: Array<string>;

  constructor() {
    this.todos = ["Eat Breakfast", "Walk Dog", "Breathe"];
  }

  addTodo(todo: HTMLInputElement) {
    this.todos.push(todo.value);
    todo.value = null;
  }

  doneTyping($event) {
    if($event.which === 13) {
      this.addTodo($event.target);
      $event.target.value = null;
    }
  }
}
bootstrap(TodoList);
