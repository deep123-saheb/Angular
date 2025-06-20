import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: false,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  userName:string = 'John Doe';
  userAge:number = 30;
  userEmail:string = 'john.doe@example.com';
  inputValue:string='test';
dInputValue:string=this.inputValue;
  users:any[]=[
    {
      name: 'John',
      age: 30,
      email: 'john@example.com',
      salary: 30000,
      country: 'USA',
      phone: '123-456-7890'
    },
    {
      name: 'Alice',
      age: 25,
      email: 'alice@example.com',
      salary: 50000,
      country: 'USA',
      phone: '123-456-7890'
    },
    {
      name: 'Bob',
      age: 28,
      email: 'bob@example.com',
      salary: 60000,
      country: 'India',
      phone: '987-654-3210'
    },
    {
      name: 'Charlie',
      age: 35,
      email: 'charlie@example.com',
      salary: 70000,
      country: 'UK',
      phone: '555-123-4567'
    },
    {
      name: 'David',
      age: 22,
      email: 'david@example.com',
      salary: 80000,
      country: 'USA',
      phone: '123-456-7890'
    }
  ]

  submit(inputValue:string){
    this.dInputValue=inputValue;
  }
  receiveData(data:any){
    console.log('Received data from child component:', data);
  }
}
