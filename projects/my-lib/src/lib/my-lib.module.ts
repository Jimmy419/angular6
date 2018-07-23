import { NgModule } from '@angular/core';
import { MyLibComponent } from './my-lib.component';

import { AlertModule } from './alert/alert.module';
import { ButtonModule } from './button/button.module';
import { CollapseModule } from './collapse/collapse.module';

@NgModule({
  imports: [
    AlertModule
  ],
  declarations: [MyLibComponent],
  exports: [MyLibComponent, AlertModule, ButtonModule, CollapseModule]
})
export class MyLibModule { }
