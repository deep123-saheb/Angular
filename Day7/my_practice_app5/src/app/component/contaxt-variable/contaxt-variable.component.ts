import { Component } from '@angular/core';

@Component({
  selector: 'app-contaxt-variable',
  standalone: false,
  templateUrl: './contaxt-variable.component.html',
  styleUrl: './contaxt-variable.component.css'
})
export class ContaxtVariableComponent {
  users=['john', 'doe', 'jane', 'smith', 'alice', 'bob', 'charlie', 'dave', 'eve', 'frank'];
}
