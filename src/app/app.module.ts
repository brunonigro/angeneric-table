import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { GenericTableModule } from '@angular-generic-table/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    GenericTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
