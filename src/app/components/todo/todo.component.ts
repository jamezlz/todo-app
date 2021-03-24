import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todos: any[];
  newTodo = "";

  constructor(private service: TodoService) { }

  ngOnInit(): void {
    this.todos = [];
    this.service.getTodos().subscribe(data=>{
      this.todos = data;
    });
  }

  addTodo() {
    if (this.newTodo) {
      let date = new Date();
      this.service.addTodo({data: this.newTodo, date: date.toISOString()}).subscribe(data=>{
        this.todos.push(data);
        this.newTodo = "";
      });
    }
  }

  finish(todo) {
    this.service.deleteTodo(todo.id).subscribe(data=>{
      let index=0;
      for (let i = 0; i<this.todos.length;i++) {
        if (this.todos[i].id === todo.id) {
          index = i;
        }
      }
      this.todos.splice(index,1);
    });
  }

}
