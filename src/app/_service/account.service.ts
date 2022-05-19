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
  // private accountSubject: BehaviorSubject<Account>;
  // public account: Observable<Account>;

  constructor(private router: Router, private http: HttpClient) {
    // return to clear the localStorage here
    //   this.accountSubject = new BehaviorSubject<Account>(
    //     JSON.parse(localStorage.getItem(accountsKey)) || null
    //   );
    //   this.account = this.accountSubject.asObservable();
  }

  login(email: string, password: string): Observable<Account> {
    return this.http.post<Account>(`${baseUrl}/users`, {
      email_address: email,
      password: password,
    });
  }

  logout() {
    // localStorage.removeItem(accountsKey);
    // this.accountSubject.next(null);
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
      console.error(error);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
