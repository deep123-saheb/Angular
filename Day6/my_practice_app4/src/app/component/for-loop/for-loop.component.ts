import { Component } from '@angular/core';

@Component({
  selector: 'app-for-loop',
  standalone: false,
  templateUrl: './for-loop.component.html',
  styleUrl: './for-loop.component.css'
})
export class ForLoopComponent {
  users=["John", "Jane", "Doe", "Alice", "Bob"];
  students=[
    {name: "John", age: 20,email:"john@example.com"},
    {name: "Jane", age: 22,email:"jane@example.com"},
    {name: "Doe", age: 21,email:"doe@example.com"},
    {name: "Alice", age: 23,email:"alice@example.com"},
    {name: "Bob", age: 24,email:"bob@example.com"}
  ];
  dName: string = '';
  getName(name: string): void {
    this.dName = name;
  }
}
