import { Component } from '@angular/core';

@Component({
  selector: 'app-else-if',
  standalone: false,
  templateUrl: './else-if.component.html',
  styleUrl: './else-if.component.css'
})
export class ElseIfComponent {
  color: string = 'black';
  num:string='0';

  setColor(newColor: string): void {
    this.color = newColor;
  }
  setNum(newNum: string): void {
    this.num = newNum;
  }

}
