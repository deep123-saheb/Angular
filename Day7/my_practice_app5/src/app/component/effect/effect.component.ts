import { Component, effect, signal } from '@angular/core';

@Component({
  selector: 'app-effect',
  standalone: false,
  templateUrl: './effect.component.html',
  styleUrl: './effect.component.css'
})
export class EffectComponent {
 count=signal(0);
 display=false;
  constructor(){
    effect(() => {
      if(this.count() === 2){
        this.display = true;

       setTimeout(() => {
        this.display = false;
        this.count.set(0); // Reset count after displaying
       }, 5000);
      }
      else{
        this.display = false;
      }
    })
  }

  updateCount(){
    this.count.set(this.count() + 1);
  }
}
