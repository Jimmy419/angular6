import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbAlert } from './alert';
import { NgbAlertConfig } from './alert-config';

export { NgbAlert } from './alert';
export { NgbAlertConfig } from './alert-config';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NgbAlert],
  entryComponents: [NgbAlert],
  exports: [NgbAlert],
  providers: [NgbAlertConfig],
})
export class AlertModule { }
