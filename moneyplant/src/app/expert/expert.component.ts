import { Component } from '@angular/core';

@Component({
  selector: 'app-expert',
  templateUrl: './expert.component.html',
  styleUrls: ['./expert.component.css']
})
export class ExpertComponent {

  show = false;
  clse = true;
  popup = false;
  openpopup() {
    this.show = true
  }
  closepopup() {
    this.show = false
  }
  openpopup2() {
    this.popup = true

  }
  closepopup2() {
    this.popup = false
  }
  close() {

    this.clse = false
  }
  constructor() {

  }
}
