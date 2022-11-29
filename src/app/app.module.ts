import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';

@NgModule({
  // Components go here.
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent
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
