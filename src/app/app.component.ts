import { Component } from '@angular/core'; // import Component

// Declare component
@Component({
  // defines the tag for the component
  selector: 'app-root',
  // html we use for the component
  templateUrl: './app.component.html',
  // styles for the component
  styleUrls: ['./app.component.css']
})

// Here, we define the properties and methods of the component. 
export class AppComponent {
  title: string = 'angular-task-tracker';
}
