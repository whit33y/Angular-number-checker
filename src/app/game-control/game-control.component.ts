import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrl: './game-control.component.css',
})
export class GameControlComponent {
  number: number = 0;
  numbers = [];
  evenNumbers = [];
  buttonClicked = false;
  oddNumbers = [];
  interval: any;
  @Output() gameStart = new EventEmitter<any>();
  @Output() gameStop = new EventEmitter<any>();
  @Output() gameRestart = new EventEmitter<any>();

  onGameStart() {
    this.interval = setInterval(() => {
      this.number += 1;
      if (this.number % 2 !== 0) {
        this.oddNumbers.push(this.number);
      } else {
        this.evenNumbers.push(this.number);
      }
      this.numbers.push(this.number);
      this.gameStart.emit(this.number);
      this.buttonClicked = true;
    }, 200);
  }
  onGameStop() {
    clearInterval(this.interval);
    this.buttonClicked = false;
  }
  onGameRestart() {
    this.buttonClicked = false;
    this.number = 0;
    this.evenNumbers = [];
    this.oddNumbers = [];
    this.gameRestart.emit([0]);
    clearInterval(this.interval);
  }
}
