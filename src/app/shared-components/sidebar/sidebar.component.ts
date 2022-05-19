import { Component, OnInit } from '@angular/core';

import { AccountService } from '../../_service/account.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  constructor(private accountService: AccountService) {}

  ngOnInit(): void {}

  logout() {
    this.accountService.logout();
  }
}
