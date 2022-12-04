import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Task } from '../Task';

@Injectable({
  providedIn: 'root'
})

export class TaskService {
  // Url for the mock API
  private apiUrl = 'http://localhost:5000/tasks';

  // object containing METHOD options (in this instance, specifies required HTTP Headers)
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  /* Constructors in angular are used to inject dependencies into the Object.
   * In this insatance, the HttpClient object is being injected into the TaskService service object. 
   */
  constructor(private httpClient: HttpClient) { }


  /* CRUD OPERATIONS
   * Components will subscribe to following methods which return an Observable Object.
   * These Observables are primarily tasked with delivering values to the Subject (Component).
   * Components will SUBSCRIBE to these methods to wait for notifications to recieve values
   */

  // Creates a GET request to the mock API backend.
  getTasks(): Observable<Task[]> {
    return this.httpClient.get<Task[]>(this.apiUrl);
  }

  // Creates a DELETE request to the mock API backend.
  deleteTask(task: Task): Observable<Task> {
    const url = `${this.apiUrl}/${task.id}`
    return this.httpClient.delete<Task>(url);
  }

  // Creates a PUT request to the mock API backend.
  updateTask(task: Task): Observable<Task> {
    const url = `${this.apiUrl}/${task.id}`;
    return this.httpClient.put<Task>(
      url,
      task,
      this.httpOptions
    );
  }

  // Creates a POST request to the mock API backend.
  addTask(task: Task): Observable<Task> {
    return this.httpClient.post<Task>(
      this.apiUrl,
      task,
      this.httpOptions
    )
  }
}
