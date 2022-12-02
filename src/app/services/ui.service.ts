import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class UiService {
  private showAddTask: boolean = false;
  private subject: Subject<any> = new Subject<any>();


  constructor() { }

  toggleAddTask(): void {
    this.showAddTask = !this.showAddTask;
    this.subject.next(this.showAddTask);
  }

  // method which fires when we toggle the addTask button
  onToggle(): Observable<any> {
    return this.subject.asObservable();
  }
}
