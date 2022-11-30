import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { TaskItemComponent } from './components/task-item/task-item.component';
import { HttpClientModule } from '@angular/common/http';
import { AddTaskComponent } from './components/add-task/add-task.component';

@NgModule({
  // Components go here.
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    TasksComponent,
    TaskItemComponent,
    AddTaskComponent,
  ],
  // Modules go here.
  imports: [
    BrowserModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule
  ],
  // Global services go here.
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
