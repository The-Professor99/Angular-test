import { Component, OnInit } from '@angular/core';
import { Patient } from '../../_models/patient';
import { AccountService } from '../../_service/account.service';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.scss'],
})
export class PatientListComponent implements OnInit {
  patients: Patient[] = [];

  constructor(private accountService: AccountService) {}

  ngOnInit(): void {
    this.getPatients();
  }

  getPatients(): void {
    this.accountService
      .getPatients()
      .subscribe((patients) => (this.patients = patients));
  }
}
