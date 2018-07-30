import { Component } from '@angular/core';
import $ from 'jquery';
import '../assets/js/index.js';
// import { Btngroup } from '../assets/js/index.js';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  showicon = false;

  alert($event) {
    $event.stoppropagation;
    alert('tyes');
  }
  public ngOnInit() {
    $(document).ready(function () {
      $('.a-btn-group').btngroup();
    });
  }
}


// @Component({
//   selector: 'ngbd-buttons-checkbox',
//   templateUrl: './buttons-checkbox.html'
// })
// export class NgbdButtonsCheckbox {
//   model = {
//     left: true,
//     middle: false,
//     right: false
//   };
// }