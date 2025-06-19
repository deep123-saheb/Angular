import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { AboutComponent } from './component/about/about.component';
import { ContactComponent } from './component/contact/contact.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { ProfileComponent } from './component/profile/profile.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'about', component:AboutComponent},
  {path:'contact', component:ContactComponent},
  {path:'profile', component:ProfileComponent,data:{name:'Deepak Saheb'}},
  {path:"**",component:PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
