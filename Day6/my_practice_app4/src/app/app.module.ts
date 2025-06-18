import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ElseIfComponent } from './component/else-if/else-if.component';
import { ForLoopComponent } from './component/for-loop/for-loop.component';
import { SignalsComponent } from './component/signals/signals.component';

@NgModule({
  declarations: [
    AppComponent,
    ElseIfComponent,
    ForLoopComponent,
    SignalsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
