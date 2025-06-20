import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './component/user/user.component';
import { FormsModule } from '@angular/forms';
import { InputDecoratorComponent } from './component/input-decorator/input-decorator.component';
import { OutputDecoratorComponent } from './component/output-decorator/output-decorator.component';
import { CountryCodePipe } from './pipe/country-code.pipe';
import { HighlightDirective } from './directive/highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    InputDecoratorComponent,
    OutputDecoratorComponent,
    CountryCodePipe,
    HighlightDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
