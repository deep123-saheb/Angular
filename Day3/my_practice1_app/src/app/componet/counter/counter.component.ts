import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: false,
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  count: number = 0;

  handleCounter(val:string){
    if(val==='plus'){
      this.count++;
    }
    else if(val==='minus'){
      if(this.count > 0) {
        this.count--;
      }
    }
    else if(val==='reset'){
      this.count = 0;
    }
    else{
      console.error('Invalid action:', val);
    }
  }
}
