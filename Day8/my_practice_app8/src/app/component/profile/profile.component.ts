import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone: false,
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  userName: string = '';
  secondUserName:string='';

  constructor(private route: ActivatedRoute) {
    // You can also access route data here if needed
    this.route.data.subscribe(data => {
      this.secondUserName = data['name'];
    });
  }

  ngOnInit(): void {
    // Initialization logic can go here
    this.route.queryParams.subscribe(params => {
      this.userName = params['name'];
    });

  }




}
