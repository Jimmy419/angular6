import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
// import { MENUS } from '../data/menus.json';

@Component({
  selector: 'app-left-navigation',
  templateUrl: './left-navigation.component.html',
  styleUrls: ['./left-navigation.component.scss']
})
export class LeftNavigationComponent implements OnInit {
  // menus: any[] = [];
  // menus: Observable<string> = [];
  constructor() { }

  ngOnInit() {
    // this.menus: Observable < any > = of('../data/menus.json');
    // this.menus = of('../data/menus.json');
  }

}
