import { Component } from '@angular/core';

@Component({
  selector: 'app-ngif',
  standalone: false,
  templateUrl: './ngif.component.html',
  styleUrl: './ngif.component.css'
})
export class NgifComponent {
 color= 'red';
 dColor='black';
  changeColor(clr: string) {
    this.color = clr;
    this.dColor = clr;
  }
}
