import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

@NgModule({
  // Components go here.
  declarations: [
    AppComponent
  ],
  // Modules go here.
  imports: [
    BrowserModule
  ],
  // Global services go here.
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
