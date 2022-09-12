import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.page.html',
  styleUrls: ['./home-page.page.scss'],
})
export class HomePagePage implements OnInit {

  appStoarge = localStorage;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  logOut() {
    localStorage.clear();
    this.router.navigate(['login'])
  }

}
