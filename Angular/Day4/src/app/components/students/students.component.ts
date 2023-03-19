import { Component } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css'],
})
export class StudentsComponent {
  students: { name: string; age: number; address: string }[] = [
    { name: 'Ahmed', age: 22, address: 'Alex' },
    { name: 'Mohamed', age: 23, address: 'Sohag' },
    { name: 'Mahmoud', age: 21, address: 'Cairo' },
    { name: 'Rana', age: 24, address: 'Port Said' },
  ];
}
