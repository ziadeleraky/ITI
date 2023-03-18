import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // title = 'Day2';

  data: { name: string; age: any }[] = [];

  getData(e: any) {
    this.data.push(e);
  }
}
