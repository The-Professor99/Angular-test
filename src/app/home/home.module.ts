import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { HomeRoutingModule } from './home-routing.module';
import { PatientListComponent } from './patient-list/patient-list.component';
import { PatientRegistrationComponent } from './patient-registration/patient-registration.component';
import { MatTableModule } from '@angular/material/table';
import { SharedModule } from '../shared-components/shared.module';

@NgModule({
  declarations: [
    LayoutComponent,
    PatientListComponent,
    PatientRegistrationComponent,
  ],
  imports: [CommonModule, HomeRoutingModule, MatTableModule, SharedModule],
})
export class HomeModule {}
