import { Component } from '@angular/core';

@Component({
  selector: 'app-ngfor',
  standalone: false,
  templateUrl: './ngfor.component.html',
  styleUrl: './ngfor.component.css'
})
export class NgforComponent {
  student=['John', 'Jane', 'Doe', 'Alice', 'Bob'];
  studentDetails = [
    { id: 1, name: 'John', age: 20 },
    { id: 2, name: 'Jane', age: 22 },
    { id: 3, name: 'Doe', age: 21 },
    { id: 4, name: 'Alice', age: 23 },
    { id: 5, name: 'Bob', age: 24 }
  ];

}
