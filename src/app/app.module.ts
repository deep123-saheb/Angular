import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import {ProfileComponent} from './component/profile/profile.component';
import { MainComponent } from './component/main/main.component';
@NgModule({
  declarations: [
    // Declare components here
    AppComponent,
    LoginComponent,
    MainComponent,
  ],
  imports: [
    // Import necessary modules here
    BrowserModule,
    ProfileComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
