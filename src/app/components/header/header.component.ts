import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  title: string = 'Task Tracker';
  showAddTask!: boolean;            // tracks the current state of the 'Add' task button
  subscription!: Subscription;      // used to subscribe to the uiService service object.

  /* Constructors in angular are used to inject dependencies into the Object.
   * In this insatance, the UiService object and Router object are being injected into the Header component
   */
  constructor(private uiService: UiService, private router: Router) {
    this.subscription = this.uiService.onToggle().subscribe((value) => this.showAddTask = value);
  }

  ngOnInit(): void {
  }

  // calls the UI Service object's toggleAddTask to toggle the state of the 'Add' button
  toggleAddTask() {
    this.uiService.toggleAddTask();
  }

  // Method to check if the current route matches the route passed in as a parameter.
  hasRoute(route: string): boolean {
    return this.router.url === route;
  }

}
