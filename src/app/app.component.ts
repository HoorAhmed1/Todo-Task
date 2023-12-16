import { Component, OnInit } from '@angular/core';
import { TaskService } from './services/task.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title: string = 'Todos Tracker';
  todos: any[] = [];
  constructor(private todoService: TaskService) {}
  
  ngOnInit() {
    this.todoService.getTasks().subscribe((todos) => {
      this.todos = todos;
    });
  }
}
