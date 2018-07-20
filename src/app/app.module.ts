import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MyLibModule } from 'my-lib';

import { AppComponent } from './app.component';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    // NgbModule.forRoot(),
    MyLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
