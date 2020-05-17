import { Component, OnInit, Input, OnChanges } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-userballon',
  templateUrl: './userballon.component.html',
  styleUrls: ['./userballon.component.css'],
  animations: [
    trigger('abrirFechar', [
      state(
        'open',
        style({
          opacity: 1,
        })
      ),
      state(
        'closed',
        style({
          opacity: 0,
        })
      ),
      transition('open => closed', [animate('1s')]),
      transition('closed => open', [animate('0.5s')]),
    ]),
  ],
})
export class UserballonComponent implements OnInit, OnChanges {
  @Input('username')
  userParam: any;

  userActual: any;

  isOpen = false;
  constructor() {}

  ngOnInit(): void {
    this.isOpen = false;
  }

  ngOnChanges() {
    if (this.userActual === this.userParam) {
      this.isOpen = false;
    } else {
      this.isOpen = true;
      this.userActual = this.userParam;
    }
  }

  closeModal() {
    this.isOpen = false;
  }
}
