import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { ChildernComponent } from './child/childern/childern.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    ChildernComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
,FormsModule  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
