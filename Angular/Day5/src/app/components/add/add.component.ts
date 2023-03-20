import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentsService } from 'src/app/services/students.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent {
  constructor(private stService: StudentsService, private router: Router) {}

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
      this.stService.addStudent(data.value).subscribe({
        next: (data) => {
          alert('Submitted Successfully');
          this.router.navigateByUrl('/');
        },
      });
    }
  }
}
