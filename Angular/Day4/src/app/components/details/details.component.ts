import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent {
  ID: number = 0;
  student:any = { name: 'Ahmed', age: 22, address: 'Alex' }
  constructor(activatedRoute: ActivatedRoute) {
    this.ID = activatedRoute.snapshot.params['id'];
  }
}
