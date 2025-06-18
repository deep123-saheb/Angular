import { Component, computed, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-signals',
  standalone: false,
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.css',
})
export class SignalsComponent {
  count = signal(0);

  data: WritableSignal<string | number> = signal('Hello');

  x = computed(() => this.count() * 2); //Note:it is a computed signal that will automatically not modify

  increment() {
    this.count.set(this.count() + 1);
  }
  decrement() {
    if (this.count() > 0) this.count.set(this.count() - 1);
  }
  reset() {
    this.count.set(0);
  }
  // working with writable signals
  // data is a writable signal that can hold either a string or a number
  changeData() {
    if (this.data() === 'Hello') {
      this.data.set(Math.floor(Math.random() * 100) + 1);
      if (this.data() === 50) {
        // Do something if the new data is equal to 50
        alert('you won the game!❤️❤️🥳🥳');
      }
    } else {
      this.data.set('Hello');
    }
  }
}
