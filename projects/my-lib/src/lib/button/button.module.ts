import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgaButton } from './button';
import { NgaButtonConfig } from './button-config';

export { NgaButton } from './button';
export { NgaButtonConfig } from './button-config';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NgaButton],
  entryComponents: [NgaButton],
  exports: [NgaButton],
  providers: [NgaButtonConfig],
})
export class ButtonModule { }
