import { Component } from '@angular/core';
import { Todos } from './Todos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  newTodo: string = '';
  todos: Todos[] = [];
  makeTodo() {
    if (this.newTodo.length != 0) {
      let todo = new Todos;
      todo.name = this.newTodo;
      todo.isCompleted = false
      this.todos.push(todo)
      this.newTodo = ''
    }
    else {
      alert('napisz coś')
    }
  }
  done(i: number) {
    this.todos[i].isCompleted = !this.todos[i].isCompleted
  }
  clear(id: number) {
    this.todos = this.todos.filter((v, i) => i != id)
  }
}
