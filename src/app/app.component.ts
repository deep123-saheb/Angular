import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'demo_app';
  name="Deepak Saheb";
  x=10;
  y=20;
  user1="Deepak";
  user2="Saheb";
}
