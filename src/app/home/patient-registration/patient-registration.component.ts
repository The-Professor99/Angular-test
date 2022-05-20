import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-patient-registration',
  templateUrl: './patient-registration.component.html',
  styleUrls: ['./patient-registration.component.scss'],
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

  patientDetails = new FormGroup({
    picture: new FormControl(''),
    title: new FormControl(''),
    surname: new FormControl(''),
    firstName: new FormControl(''),
    middleName: new FormControl(''),
    phoneNumber: new FormControl(''),
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
    fullName: new FormControl(''),
    relationship: new FormControl(''),
    patientPhoneNumber: new FormControl(''),
    patientAddress: new FormControl(''),
  });
  hmoDetails = new FormGroup({
    spanar: new FormControl(''),
  });
  isOptional = false;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.patientDetails = this.formBuilder.group({
      picture: [''],
      title: ['', Validators.required],
      surname: ['', Validators.required],
      firstName: ['', Validators.required],
      middleName: ['', Validators.required],
      phoneNumber: ['', Validators.required],
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
      fullName: ['', Validators.required],
      relationship: ['', Validators.required],
      patientPhoneNumber: ['', Validators.required],
      patientAddress: ['', Validators.required],
    });
    this.hmoDetails = this.formBuilder.group({
      spanar: ['', Validators.required],
    });
  }

  registerPatient() {
    alert('Registration Successful');
  }
}
