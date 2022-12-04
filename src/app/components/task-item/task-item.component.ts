import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Task } from 'src/app/Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  @Input() task!: Task;
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();
  @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter();
  faTimes = faTimes;

  constructor() { }

  ngOnInit(): void {
  }

  // Function to handle faTimes click event 
  // Emits the task bound to onDeleteTask event emitter to the parent task-component to delete the task
  onDelete(task: Task) {
    this.onDeleteTask.emit(task);
  }

  // Function to handle double click venet on the specific task
  // Emits the task bound to onToggleReminder to the parent task-component to change the reminder border
  onToggle(task: Task) {
    this.onToggleReminder.emit(task);
  }

}
