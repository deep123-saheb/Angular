import { Component } from '@angular/core';
import { JokeService } from "../../../service/joke.service";
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-joke',
  standalone: false,
  templateUrl: './joke.component.html',
  styleUrl: './joke.component.css'
})
export class JokeComponent {
  joke: any = "loading";

  constructor(private jokeService: JokeService) {
  
  }

  ngOnInit() {

  }

  displayJoke(): void {
    this.jokeService.getJoke().subscribe((data: any) => {
      this.joke = data.value;
      console.log(this.joke);
    });
  }
}



