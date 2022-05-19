import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { TopbarComponent } from './topbar/topbar.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [SidebarComponent, TopbarComponent],
  imports: [CommonModule, RouterModule, MatButtonModule],
  exports: [SidebarComponent, CommonModule],
})
export class SharedModule {}
