import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/Task';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((task) => this.tasks = task);
  }

  deleteTask(task: Task): void {
    this.taskService
      .deleteTask(task)
      .subscribe(
        () => this.tasks = this.tasks.filter((t) => t.id !== task.id)
      );
  }

}
