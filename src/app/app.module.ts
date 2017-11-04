import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyPropertyBindingComponent } from './my-property-binding/my-property-binding.component';
import { MyEventBindingComponent } from './my-event-binding/my-event-binding.component';

@NgModule({
  declarations: [
    AppComponent,
    MyPropertyBindingComponent,
    MyEventBindingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
