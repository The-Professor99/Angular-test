import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { TopbarComponent } from './topbar/topbar.component';

@NgModule({
  declarations: [SidebarComponent, TopbarComponent],
  imports: [CommonModule, RouterModule],
  exports: [SidebarComponent, CommonModule],
})
export class SharedModule {}
