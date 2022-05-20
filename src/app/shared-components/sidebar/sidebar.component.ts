import { Component, OnInit } from '@angular/core';

import { AccountService } from '../../_service/account.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  account = {
    email_address: '',
  };

  constructor(private accountService: AccountService) {
    this.accountService.account.subscribe((x) => (this.account = x));
  }

  ngOnInit(): void {}

  logout() {
    this.accountService.logout();
  }
}
