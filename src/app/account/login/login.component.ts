import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });
  loading = false;
  show: boolean;
  submitted = false;
  title = 'Login';

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.show = false;
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: [
        '',
        [
          Validators.required,
          Validators.pattern(
            /^([_a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,5}))$|^(\d{11})$/
          ),
        ],
      ],
      password: ['', Validators.required],
    });
  }

  passwordify() {
    this.show = !this.show;
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  onSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    this.loading = true;

    // login service
    setTimeout(() => {
      const returnUrl = '';
      this.router.navigateByUrl(returnUrl);
    }, 5000);
  }
}
