import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
   loginResultCount = 0;

   onLogin() {
      this.loginResultCount++;
   }
    onLogout() {
        this.loginResultCount--;
    }
}
