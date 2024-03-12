import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  numbers = [];
  newNumber(number: number) {
    this.numbers.push(number);
  }
  deleteNumber() {
    this.numbers = [];
  }
}
