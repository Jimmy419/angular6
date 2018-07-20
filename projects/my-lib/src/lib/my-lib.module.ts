import { NgModule } from '@angular/core';
import { MyLibComponent } from './my-lib.component';

import { AlertModule } from './alert/alert.module';

@NgModule({
  imports: [
    AlertModule
  ],
  declarations: [MyLibComponent],
  exports: [MyLibComponent, AlertModule]
})
export class MyLibModule { }
