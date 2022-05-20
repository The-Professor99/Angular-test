import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../_service/account.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss'],
})
export class TopbarComponent implements OnInit {
  account = {
    email_address: '',
  };

  constructor(private accountService: AccountService) {
    this.accountService.account.subscribe((x) => (this.account = x));
  }

  ngOnInit(): void {}
}
