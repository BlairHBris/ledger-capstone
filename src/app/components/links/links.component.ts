import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.css']
})
export class LinksComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  hasRoute(route: string) {
    return this.router.url === route
  }

  verify() {
    let verify = confirm("Are you sure you want to log out?")
    switch (verify) {
      case true:
        this.router.navigate(['/'])
    }
    
  }
}

