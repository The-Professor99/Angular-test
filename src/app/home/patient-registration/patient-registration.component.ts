import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { DialogBoxComponent } from '../dialog-box.component';
import { MatDialog } from '@angular/material/dialog';
import { AccountService } from '../../_service/account.service';
import { Title } from '@angular/platform-browser';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';

@Component({
  selector: 'app-patient-registration',
  templateUrl: './patient-registration.component.html',
  styleUrls: ['./patient-registration.component.scss'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { displayDefaultIndicatorType: false },
    },
  ],
})
export class PatientRegistrationComponent implements OnInit {
  titles: string[] = ['Mr.', 'Mrs.', 'Miss'];
  ethnicGroups: string[] = ['Yoruba', 'Igbo', 'Hausa'];
  maritalStatuses: string[] = ['Married', 'Widowed'];
  countries: string[] = ['Nigeria', 'Ghana'];
  states: string[] = ['Lagos', 'Abuja'];
  lgas: string[] = ['North', 'South'];
  relationships: string[] = ['Uncle', 'Sister', 'Father'];
  policies: string[] = ['Policy One', 'Policy Two', 'Policy Two'];
  genders: string[] = ['Male', 'Female'];
  title = 'Patient Registration';

  patientDetails = new FormGroup({
    image: new FormControl(''),
    title: new FormControl(''),
    surname: new FormControl(''),
    firstName: new FormControl(''),
    middleName: new FormControl(''),
    phone: new FormControl(''),
    email: new FormControl(''),
    gender: new FormControl(''),
    dob: new FormControl(''),
    address: new FormControl(''),
  });
  otherDetails = new FormGroup({
    ethnicity: new FormControl(''),
    religion: new FormControl(''),
    maritalStatus: new FormControl(''),
    occupation: new FormControl(''),
    bloodGroup: new FormControl(''),
    patientType: new FormControl(''),
    nationality: new FormControl(''),
    state: new FormControl(''),
    lga: new FormControl(''),
    residence: new FormControl(''),
  });
  nextOfKinDetails = new FormGroup({
    name: new FormControl(''),
    relationship: new FormControl(''),
    patientPhoneNumber: new FormControl(''),
    patientAddress: new FormControl(''),
  });
  hmoDetails = new FormGroup({
    spanar: new FormControl(''),
  });
  isOptional = false;
  verticalOrientation = true;

  constructor(
    private titleService: Title,
    private accountService: AccountService,
    private formBuilder: FormBuilder,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.titleService.setTitle(this.title);
    this.patientDetails = this.formBuilder.group({
      image: [''],
      title: ['', Validators.required],
      surname: ['', Validators.required],
      firstName: ['', Validators.required],
      middleName: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', Validators.required],
      gender: ['', Validators.required],
      dob: ['', Validators.required],
      address: ['', Validators.required],
    });
    this.otherDetails = this.formBuilder.group({
      ethnicity: ['', Validators.required],
      religion: ['', Validators.required],
      maritalStatus: ['', Validators.required],
      occupation: ['', Validators.required],
      bloodGroup: ['', Validators.required],
      patientType: ['', Validators.required],
      nationality: ['', Validators.required],
      state: ['', Validators.required],
      lga: ['', Validators.required],
      residence: ['', Validators.required],
    });
    this.nextOfKinDetails = this.formBuilder.group({
      name: ['', Validators.required],
      relationship: ['', Validators.required],
      patientPhoneNumber: ['', Validators.required],
      patientAddress: ['', Validators.required],
    });
    this.hmoDetails = this.formBuilder.group({
      spanar: ['', Validators.required],
    });

    // Set orientation
    this.verticalOrientation = screen.width < 768 ? true : false;
  }

  get getDetails() {
    return this.patientDetails;
  }

  get getotherDetails() {
    return this.otherDetails;
  }

  get getNextofKinDetails() {
    return this.nextOfKinDetails;
  }

  get getHMODetails() {
    return this.hmoDetails;
  }

  registerPatient() {
    if (
      this.getDetails.invalid ||
      this.getotherDetails.invalid ||
      this.getNextofKinDetails.invalid ||
      this.getHMODetails.invalid
    ) {
      return;
    }
    let all_data = Object.assign(
      {},
      this.getDetails.value,
      this.getotherDetails.value,
      this.getNextofKinDetails.value,
      this.getHMODetails.value
    );

    // Send Post Request
    this.dialog.open(DialogBoxComponent);
    this.accountService
      .registerPatientDetails(all_data)
      .pipe()
      .subscribe({
        next: () => {
          this.dialog.open(DialogBoxComponent);
        },
        error: (error) => {
          alert(error.statusText);
          // this.loading = false;
        },
      });
  }
}
