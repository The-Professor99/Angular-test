import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, catchError, Observable, of, tap } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Account } from '../_models/account';
import { Patient } from '../_models/patient';

const baseUrl = `${environment.apiUrl}`;
const accountsKey = 'user-account-angular-test';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  private accountSubject: BehaviorSubject<Account>;
  public account: Observable<any>;

  constructor(private router: Router, private http: HttpClient) {
    this.accountSubject = new BehaviorSubject<Account>(
      JSON.parse(localStorage.getItem(accountsKey) || '{}')
    );
    this.account = this.accountSubject.asObservable();
  }

  login(email: string, password: string): Observable<Account> {
    return this.http
      .post<Account>(`${baseUrl}/users`, {
        email_address: email,
        password: password,
      })
      .pipe(
        tap((account) => {
          if (account.email_address) {
            localStorage.setItem(accountsKey, JSON.stringify(account));

            this.accountSubject.next(account);
          }
        }),
        (error) => {
          return error;
        }
      );
  }

  registerPatientDetails(form: Account) {
    return this.http.post<Account>(`${baseUrl}/patients`, form).pipe(
      tap((_) => console.log('Patients Data Registered')),
      (error) => {
        return error;
      }
    );
  }

  logout() {
    localStorage.removeItem(accountsKey);
    this.accountSubject.next({
      email_address: '',
      password: '',
    });
    this.router.navigate(['/account/login']);
  }

  getPatients(): Observable<Patient[]> {
    return this.http.get<Patient[]>(`${baseUrl}/patients`).pipe(
      tap((_) => console.log('fetched patients')),
      catchError(this.handleError<Patient[]>('getPatients', []))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      alert(error.statusText);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
