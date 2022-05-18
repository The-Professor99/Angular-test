import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AccountRoutingModule } from './account-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [LayoutComponent, LoginComponent],
  imports: [CommonModule, ReactiveFormsModule, AccountRoutingModule],
})
export class AccountModule {}
