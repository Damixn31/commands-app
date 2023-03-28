import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { ComandModule } from './commands/comand.module';
import { AppRoutingModule } from './app-routing-module';
import { SharedModule } from './shared/shared.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ComandModule,
    SharedModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
