import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-register-component',
  templateUrl: './register-component.component.html',
  styleUrls: ['./register-component.component.css'],
})
export class RegisterComponentComponent {
  name: string = '';
  age: any;

  @Output() event = new EventEmitter();

  data() {
    if (this.name.length > 3 && this.age < 40 && this.age > 20) {
      this.event.emit({
        name: this.name,
        age: this.age,
      });
    }
  }
}
