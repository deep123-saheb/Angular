import { Component ,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-output-decorator',
  standalone: false,
  templateUrl: './output-decorator.component.html',
  styleUrl: './output-decorator.component.css'
})
export class OutputDecoratorComponent {
  // This component can be used to demonstrate the use of Output decorators in Angular.
  // You can implement event emitters here to communicate with parent components.

  // Example of an Output property:
  @Output() myEvent = new EventEmitter<string>();

  // Method to emit an event
  emitEvent() {
    this.myEvent.emit('Hello from OutputDecoratorComponent!');
  }

}
