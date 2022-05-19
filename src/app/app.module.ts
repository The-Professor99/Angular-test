import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PatientListComponent } from './home/patient-list/patient-list.component';
import { PatientRegistrationComponent } from './home/patient-registration/patient-registration.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
// import { StoreModule } from '@ngrx/store';
// import { reducer } from './store/reducers/account.reducer';

@NgModule({
  declarations: [
    AppComponent,
    PatientListComponent,
    PatientRegistrationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTableModule,
    // StoreModule.forRoot({ user: reducer }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
