import { Component, OnInit } from '@angular/core';

export interface NavItemInterface {
  name: string,
  title: string,
  link: string,
  icon?: string
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  navItems = [
    {
      name: 'home',
      title: 'Home',
      link: '/home'
    },
    {
      name: 'report',
      title: 'Report',
      link: '/report'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
