import { Component,Input, numberAttribute } from '@angular/core';

@Component({
  selector: 'app-input-decorator',
  standalone: false,
  templateUrl: './input-decorator.component.html',
  styleUrl: './input-decorator.component.css'
})
export class InputDecoratorComponent {
  // Using Input decorator to bind properties from parent to child component
  @Input({alias:'userName'}) userName:string ='';

  @Input({transform:numberAttribute}) userAge!:number

  @Input() userEmail:string ='';

  @Input({transform:numberAttribute}) userSalary!:number

  @Input() userCountry:string ='';

  @Input() userPhone:string ='';


}
