import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  form = new FormGroup({
    name: new FormControl(null, [Validators.required, Validators.minLength(4)]),
    age: new FormControl(null, [
      Validators.required,
      Validators.min(20),
      Validators.max(40),
    ]),
    email: new FormControl(null, [Validators.required, Validators.email]),
  });

  get nameValidation() {
    // return true if there's a valid name
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

  data() {
    if (this.nameValidation && this.ageValidation && this.emailValidation) {
      alert('Submitted Successfully');
    }
  }
}
