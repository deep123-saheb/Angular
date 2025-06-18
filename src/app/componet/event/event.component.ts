import { Component } from '@angular/core';

@Component({
  selector: 'app-event',
  standalone: false,
  templateUrl: './event.component.html',
  styleUrl: './event.component.css'
})
export class EventComponent {

  handleEvent(event:Event){
    console.log('Event triggered:', event.type);// it will show you what type of event is triggered
   }
}
