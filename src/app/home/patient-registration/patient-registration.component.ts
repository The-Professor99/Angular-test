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
  patientDetails = new FormGroup({
    firstCtrl: new FormControl(''),
  });
  otherDetails = new FormGroup({
    secondCtrl: new FormControl(''),
  });
  nextOfKinDetails = new FormGroup({
    secondCtrl: new FormControl(''),
  });
  hmoDetails = new FormGroup({
    secondCtrl: new FormControl(''),
  });
  isOptional = false;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.patientDetails = this.formBuilder.group({
      firstCtrl: ['', Validators.required],
    });
    this.otherDetails = this.formBuilder.group({
      secondCtrl: '',
    });
    this.nextOfKinDetails = this.formBuilder.group({
      secondCtrl: '',
    });
    this.hmoDetails = this.formBuilder.group({
      secondCtrl: '',
    });
  }
}
