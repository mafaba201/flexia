import { Component } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { NgIf } from '@angular/common';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'fluxia';
  menuOpen = false;
  isContactPage = false;
  isHomePage = false;

  constructor(private router: Router) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      this.isContactPage = event.urlAfterRedirects === '/contact';
      this.isHomePage = event.urlAfterRedirects === '/' || event.urlAfterRedirects === '';
      this.menuOpen = false;
    });
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  goBack() {
    this.router.navigate(['/']);
  }

  closeMenu() {
    this.menuOpen = false;
  }
}
