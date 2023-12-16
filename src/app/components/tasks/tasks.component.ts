import { Component, OnInit } from '@angular/core';
import { Task } from '../../Task';
import { TaskService } from '../../services/task.service';
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent implements OnInit{
  title = 'Tasks Component';
  todos: any[] = [];
  constructor(private taskService: TaskService) { }
  ngOnInit(): void {
    this.taskService.getTasks().subscribe((todos) => {
      this.todos = todos;
    });
  }
}
