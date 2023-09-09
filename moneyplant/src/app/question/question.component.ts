import { Component } from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent {

  show = false;
  show2 = false;

  openpopup() {
    this.show = true
  }
  form2() {
    this.show2 = true
  }

  constructor() {

  }
}
