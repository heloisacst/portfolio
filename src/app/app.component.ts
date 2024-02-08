import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  title = 'portfolio';
  backgroundClass: string = 'background-container';

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        if (event.url === '/contact') {
          this.backgroundClass = 'contact-background';
        } else {
          this.backgroundClass = 'background-container';
        }
      }
    });
  }
}
