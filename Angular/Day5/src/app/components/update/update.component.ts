import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentsService } from 'src/app/services/students.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css'],
})
export class UpdateComponent implements OnInit {
  ID: any;
  constructor(
    private activateRoute: ActivatedRoute,
    private stService: StudentsService,
    private router: Router
  ) {
    this.ID = activateRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.getStudent();
  }

  form = new FormGroup({
    name: new FormControl(null, [Validators.required, Validators.minLength(4)]),
    age: new FormControl(null, [
      Validators.required,
      Validators.min(20),
      Validators.max(40),
    ]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    phone: new FormControl(null, [Validators.required]),
    city: new FormControl(null, [Validators.required]),
  });

  get nameValidation() {
    return this.form.controls['name'].valid && this.form.controls['name'].value;
  }

  get ageValidation() {
    return this.form.controls['age'].valid && this.form.controls['age'].value;
  }

  get emailValidation() {
    return (
      this.form.controls['email'].valid && this.form.controls['email'].value
    );
  }

  get phoneValidation() {
    return (
      this.form.controls['phone'].valid && this.form.controls['phone'].value
    );
  }

  get cityValidation() {
    return this.form.controls['city'].valid && this.form.controls['city'].value;
  }

  data(data: any) {
    if (
      this.nameValidation &&
      this.ageValidation &&
      this.emailValidation &&
      this.phoneValidation &&
      this.cityValidation
    ) {
      this.stService.updateStudent(this.ID, data.value).subscribe({
        next: (data) => {
          alert('Updated Successfully');
          this.router.navigateByUrl('/');
        },
      });
    }
  }

  getStudent() {
    this.stService.getStudentByID(this.ID).subscribe({
      next: (data) => {
        // console.log(data);
        this.form.patchValue(data);
      },
    });
  }
}
