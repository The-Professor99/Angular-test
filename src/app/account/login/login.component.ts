import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { tap } from 'rxjs';
// import { LoginComplete } from '../../store/actions/account.actions';
// import { AppState } from '../../store/reducers';
import { AccountService } from '../../_service/account.service';

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
  accountsKey = 'user-account-angular-test';

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private accountService: AccountService,
    private route: ActivatedRoute // private store: Store<AppState>
  ) {
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
    this.accountService
      .login(this.email?.value, this.password?.value)
      .pipe
      // tap((account) => {
      //   this.store.dispatch(new LoginComplete({ account }));

      //   this.router.navigateByUrl('/');
      // })
      ()
      .subscribe({
        next: (account) => {
          localStorage.setItem(
            this.accountsKey,
            JSON.stringify(account.email_address)
          );
          // get return url from query parameters or default to home page
          const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '';
          this.router.navigateByUrl(returnUrl);
        },
        error: (error) => {
          alert(error.statusText);
          this.loading = false;
        },
      });
  }
}
