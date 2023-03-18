import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-students-component',
  templateUrl: './students-component.component.html',
  styleUrls: ['./students-component.component.css'],
})
export class StudentsComponentComponent {
  @Input() students: any;
}
