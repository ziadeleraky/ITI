import { Component, OnInit } from '@angular/core';
import { StudentsService } from 'src/app/services/students.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private stService: StudentsService) {}
  Students: any;

  ngOnInit(): void {
    this.stService.getAllStudents().subscribe({
      next: (data) => {
        this.Students = data;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  delete(id: any) {
    this.stService.deleteStudent(id).subscribe({
      next: () => {
        this.Students.splice(+id - 1, 1);
      },
    });
  }
}
