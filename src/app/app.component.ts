import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  showicon = false;

  alert($event) {
    $event.stoppropagation;
    alert('tyes');
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