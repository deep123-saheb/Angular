import { Component } from '@angular/core';

@Component({
  selector: 'app-get-set-input',
  standalone: false,
  templateUrl: './get-set-input.component.html',
  styleUrl: './get-set-input.component.css',
})
export class GetSetInputComponent {
  name = '';
  dName = '';
  dEmail = '';
  email = '';
  getName(event: Event) {
    this.name = (event.target as HTMLInputElement).value;
  }
  setName() {
    this.name = 'Deepak Saheb';
  }

  displayName() {
    this.dName = this.name;
  }
  resetName() {
    this.name = '';
  }
  getEmail(value: string) {
    this.email = value;
  }
  setEmail() {
    this.email = 'deepak@example.com';
  }

  displayEmail() {
    this.dEmail = this.email;
  }
  resetEmail() {
    this.email = '';
  }
}
