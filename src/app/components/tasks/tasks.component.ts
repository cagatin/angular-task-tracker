import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/Task';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];   // array containing Task objects

  // Injects the taskService service object as a dependency into the Task Component object
  constructor(private taskService: TaskService) { }

  // When the component is first rendered, retrieve the tasks from the task service object and bind them to the component's Task[] array
  ngOnInit(): void {
    this.taskService.getTasks().subscribe((task) => this.tasks = task);
  }

  // Method which takes in a task object and deletes it.
  // Filters the task array to remove the specified task.
  deleteTask(task: Task): void {
    this.taskService
      .deleteTask(task)
      .subscribe(
        () => this.tasks = this.tasks.filter((t) => t.id !== task.id)
      );
  }

  // Method used to toggle the reminder property of the task object.
  // Updates the task using the taskService obejct
  toggleReminder(task: Task): void {
    task.reminder = !task.reminder;
    this.taskService.updateTask(task).subscribe();
  }


  // Adds a task
  addTask(task: Task): void {
    this.taskService.addTask(task).subscribe((task) => this.tasks.push(task))
  }
}
