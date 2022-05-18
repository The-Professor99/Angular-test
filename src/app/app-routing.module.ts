import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PatientListComponent } from './home/patient-list/patient-list.component';

const accountModule = () =>
  import('./account/account.module').then((x) => x.AccountModule);

const routes: Routes = [
  { path: '', component: PatientListComponent },
  { path: 'account', loadChildren: accountModule },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
