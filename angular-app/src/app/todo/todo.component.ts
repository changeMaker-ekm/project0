import { Component, OnInit } from '@angular/core';
import { Todo } from './todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  todos: Todo[] = [];
  newTodo:string;

  constructor() { }

  ngOnInit(): void {
  }

  addTodo(){
    if(this.newTodo){
      let todo = new Todo();
      todo.name = this.newTodo;
      todo.isCompleted = false;
      this.todos.push(todo);
      this.newTodo = '';
    }else{
      alert("Please, don't leave the input field blank")
    }
  }

  itemCompleted(i:number){
    this.todos[i].isCompleted = !this.todos[i].isCompleted;
  }

  removeItem(id:number){
    this.todos = this.todos.filter((v,i)=>i!==id);
  }

}
