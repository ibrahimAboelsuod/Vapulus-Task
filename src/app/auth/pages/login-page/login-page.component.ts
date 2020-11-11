import { animate, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '@app/auth/services/auth/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
  animations: [
    trigger('loginContainer', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(100%)' }),
        animate('400ms 1s', style({ opacity: 1, transform: 'translateX(0)' })),
      ]),
    ]),
    trigger('imageContainer', [
      transition(':enter', [
        style({ transform: 'translateX(50%)' }),
        animate('400ms 1s', style({ opacity: 1, transform: 'translateX(0)' })),
      ]),
    ]),
  ],
})
export class LoginPageComponent {
  public loginForm: FormGroup = this.formBuilder.group({
    username: [undefined, [Validators.required, Validators.email]],
    password: [undefined, [Validators.required, Validators.minLength(8)]],
  });

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    if (this.authService.getIsAuthorized()) {
      this.router.navigate(['/home']).then();
    }
  }

  public submitLogin(): void {
    this.loginForm.patchValue(this.loginForm.value);
    Object.keys(this.loginForm.controls).forEach((controller) => {
      this.loginForm.controls[controller].markAsTouched();
    });

    if (this.loginForm.valid) {
      this.loginForm.disable();
      this.authService.login(this.loginForm.value).subscribe(() => {
        const returnUrl = this.activatedRoute.snapshot.queryParams.returnUrl;
        this.router.navigate([returnUrl || 'home']).then();
      });
    }
  }
}
