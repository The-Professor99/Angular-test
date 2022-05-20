import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { HomeRoutingModule } from './home-routing.module';
import { PatientListComponent } from './patient-list/patient-list.component';
import { PatientRegistrationComponent } from './patient-registration/patient-registration.component';
import { MatTableModule } from '@angular/material/table';
import { SharedModule } from '../shared-components/shared.module';
import { MatStepperModule } from '@angular/material/stepper';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { DialogBoxComponent } from './dialog-box.component';

@NgModule({
  declarations: [
    LayoutComponent,
    PatientListComponent,
    PatientRegistrationComponent,
    DialogBoxComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule,
    MatTableModule,
    MatFormFieldModule,
    MatStepperModule,
    MatInputModule,
    MatSidenavModule,
    MatProgressSpinnerModule,
    SharedModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
  ],
})
export class HomeModule {}
