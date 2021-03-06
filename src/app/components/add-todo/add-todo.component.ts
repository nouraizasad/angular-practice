import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/models/todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {

  // @Input('ngModel') model: any
  @Output() addTodo = new EventEmitter();

  title: string;

  constructor() { }

  ngOnInit(): void {
  }

  fuark = (event) => {
    console.log(event)
  }

  submitTodo = () => {

    if (!this.title) {
      alert('Cannot leave title empty!');
      return
    }

    let todo = {
      title: this.title,
      completed: false
    }

    this.addTodo.emit(todo);
    this.title = '';

  }

}
