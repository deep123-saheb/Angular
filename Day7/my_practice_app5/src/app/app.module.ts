import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EffectComponent } from './component/effect/effect.component';
import { ContaxtVariableComponent } from './component/contaxt-variable/contaxt-variable.component';
import { TwoWayBindingComponent } from './component/two-way-binding/two-way-binding.component';
import { FormsModule } from '@angular/forms';
import { ToDoListComponent } from './component/to-do-list/to-do-list.component';
import { NgforComponent } from './component/ngfor/ngfor.component';
import { NgifComponent } from './component/ngif/ngif.component';
import { NgswitchComponent } from './component/ngswitch/ngswitch.component';

@NgModule({
  declarations: [
    AppComponent,
    EffectComponent,
    ContaxtVariableComponent,
    TwoWayBindingComponent,
    ToDoListComponent,
    NgforComponent,
    NgifComponent,
    NgswitchComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
