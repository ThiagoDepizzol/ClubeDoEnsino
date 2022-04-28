import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {IndexHeaderComponent} from "./index-header/index-header.component";
import { FooterIndexComponent } from './footer-index/footer-index.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexHeaderComponent,
    FooterIndexComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
