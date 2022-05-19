import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {
    // this.displaySearchBar = this.router.url === '/dashboard' ? true : false;
    // console.log(this.router.url, this.displaySearchBar);
    console.log('hello');
  }
}
