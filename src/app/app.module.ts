import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DxPivotGridModule } from 'devextreme-angular';
import { Service } from './app.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DxPivotGridModule,
  
  
   
  ],
  providers: [Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
