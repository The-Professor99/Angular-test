import { Component, OnInit, ViewEncapsulation } from '@angular/core';
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
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { ErrorDialogBoxComponent } from '../dialogs/error-dialog-box/error-dialog-box.component';

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
  // to restore default step states, remove the providers directive.
  encapsulation: ViewEncapsulation.None,
})
export class PatientRegistrationComponent implements OnInit {
  // file: any[] = [];
  loading = false;
  imgSrc: any = '';
  size: string = '';
  filename: string = '';
  isOptional = false;
  verticalOrientation = true;
  imageError: boolean = false;
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
    imagePlaceholder: new FormControl(''),
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

  constructor(
    private titleService: Title,
    private accountService: AccountService,
    private formBuilder: FormBuilder,
    public dialog: MatDialog,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    this.titleService.setTitle(this.title);
    this.patientDetails = this.formBuilder.group({
      imagePlaceholder: [''],
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

  sanitizeImageUrl(imageUrl: string): SafeUrl {
    return this.sanitizer.bypassSecurityTrustUrl(imageUrl);
  }

  formatBytes(bytes: number, decimals = 2) {
    if (bytes === 0) {
      return '0 Bytes';
    }
    const k = 1024;
    const dm = decimals <= 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
  }

  handleFile(file: any) {
    if (!file.type.startsWith('image') || file.size > 5000000) {
      this.imageError = true;
      return;
    }

    this.imageError = false;
    this.size = this.formatBytes(file.size);
    this.filename = file.name;
    console.log(this.size);
    // this.imgSrc = this.sanitizeImageUrl(URL.createObjectURL(file))
    // https://stackoverflow.com/questions/57743966/getting-unsafe-url-error-while-displaying-image

    const reader = new FileReader();
    reader.addEventListener('load', (event: any) => {
      let srcData = event.target.result;
      this.imgSrc = srcData;
    });
    reader.readAsDataURL(file);
  }

  onFileDropped(files: Array<File>) {
    this.handleFile(files[0]);
  }

  onChange = (event: Event) => {
    const my_files = [];
    const target = event.target as HTMLInputElement;
    const files = target.files || [];
    for (let i = 0; i < files.length; i++) {
      my_files.push(files[i]);
    }

    this.handleFile(my_files[0]);
  };

  registerPatient() {
    if (
      this.getDetails.invalid ||
      this.getotherDetails.invalid ||
      this.getNextofKinDetails.invalid ||
      this.getHMODetails.invalid
    ) {
      this.dialog.open(ErrorDialogBoxComponent);
      return;
    }

    this.getDetails.removeControl('imagePlaceholder');
    let all_data = Object.assign(
      {},
      { image: this.imgSrc }, // to serve until i find a better way to upload image value without errors
      this.getDetails.value,
      this.getotherDetails.value,
      this.getNextofKinDetails.value,
      this.getHMODetails.value
    );

    // Send Post Request
    this.loading = true;
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
    this.loading = false;
    this.getDetails.addControl(
      'imagePlaceholder',
      this.formBuilder.control('')
    );
  }
}
