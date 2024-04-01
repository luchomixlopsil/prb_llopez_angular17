import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sing-in',
  standalone: true,
  imports: [],
  templateUrl: './sign-in.component.html',
})
export default class SignInComponent {
  router = inject(Router);

  login(): void {
    localStorage.setItem('isAuthenticated', 'true');
    //Permitir acceso 0, denegar acceso 1
    localStorage.setItem('CanAccessToMenu', '0');
    this.router.navigateByUrl('/dashboard');
  }
}
 