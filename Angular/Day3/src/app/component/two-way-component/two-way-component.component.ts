import { Component } from '@angular/core';

@Component({
  selector: 'app-two-way-component',
  templateUrl: './two-way-component.component.html',
  styleUrls: ['./two-way-component.component.css'],
})
export class TwoWayComponentComponent {
  fullName: string = '';

  reset() {
    this.fullName = '';
  }
}
