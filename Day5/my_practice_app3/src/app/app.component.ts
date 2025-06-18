import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my_practice_app3';
  display:boolean=false;
  divToggle:boolean=false;
  showDiv() {
    this.display=true;
  }

  hideDiv() {
    this.display=false;
  }

  toggleDiv() {
    this.display=!this.display;
  }
  toggleDiv2() {
    this.divToggle=!this.divToggle;
  }

}
