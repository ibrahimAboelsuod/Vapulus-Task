import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@app/auth/services/auth/auth.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent {
  constructor(private authService: AuthService, private router: Router) {}

  public logout(): void {
    this.authService.logout();
    this.router.navigate(['auth/login']);
  }
}
