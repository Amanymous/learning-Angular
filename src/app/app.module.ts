import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { UsdPkrPipe } from './pipes/usd-pkr.pipe';



@NgModule({
  declarations: [
    AppComponent,
    UsdPkrPipe,
    

  ],
  imports: [
    BrowserModule
,FormsModule  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
