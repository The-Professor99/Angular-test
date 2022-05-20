import { Component, OnInit } from '@angular/core';
import { Patient } from '../../_models/patient';
import { AccountService } from '../../_service/account.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.scss'],
})
export class PatientListComponent implements OnInit {
  dataSource: Patient[] = [];
  filterDataSource: Patient[] = [];
  isLoading = true;
  columnsToDisplay = [
    'avatar',
    'name',
    'gender',
    'age',
    'phone',
    'address',
    'viewDetails',
  ];
  title = 'Dashboard';

  constructor(
    private titleService: Title,
    private accountService: AccountService
  ) {}

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
    this.getPatients();
  }

  getPatients(): void {
    this.accountService.getPatients().subscribe((patients) => {
      this.dataSource = patients;
      this.filterDataSource = patients; // use for filtering to avoid permanent overwrite of dataSource
      // this.dataSource = new MatTableDataSource(patients);
      this.isLoading = false;
    });
  }

  viewDetails(id: number) {
    // setup data fetch with id

    alert(id);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    console.log(filterValue);
    this.dataSource = this.filterDataSource.filter((patient) => {
      console.log(patient);
      let name = patient.name.trim().toLowerCase();
      return name.startsWith(filterValue.trim().toLowerCase());
    });
  }
}
