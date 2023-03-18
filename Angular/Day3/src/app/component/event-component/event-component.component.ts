import { Component } from '@angular/core';

@Component({
  selector: 'app-event-component',
  templateUrl: './event-component.component.html',
  styleUrls: ['./event-component.component.css'],
})
export class EventComponentComponent {
  src: string = 'assets/Images/1.jpg';
  counter: number = 1;
  interval: any;

  next() {
    this.counter++;
    if (this.counter < 5) {
      this.src = `assets/Images/${this.counter}.jpg`;
    } else {
      this.counter = 1;
      this.src = `assets/Images/${this.counter}.jpg`;
    }
  }

  prev() {
    this.counter--;
    if (this.counter == 0) {
      this.counter = 4;
    }
    this.src = `assets/Images/${this.counter}.jpg`;
  }

  slide() {
    this.interval = setInterval(() => {
      this.counter++;
      if (this.counter == 5) {
        this.counter = 1;
      }
      this.src = `assets/Images/${this.counter}.jpg`;
    }, 1500);
  }

  stopp() {
    clearInterval(this.interval);
  }
}
