import { Component } from '@angular/core';

@Component({
  selector: 'app-ngswitch',
  standalone: false,
  templateUrl: './ngswitch.component.html',
  styleUrl: './ngswitch.component.css'
})
export class NgswitchComponent {
  color='';
changeColor(clr: string) {
    this.color = clr;
  }
}
