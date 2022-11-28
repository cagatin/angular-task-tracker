import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  // Components go here.
  declarations: [
    AppComponent,
    HeaderComponent
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
