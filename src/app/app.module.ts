import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {IndexHeaderComponent} from "./index-header/index-header.component";
import { FooterIndexComponent } from './footer-index/footer-index.component';
import { HomePageExcelComponent } from './home-page-excel/home-page-excel.component';
import {TemplateModule} from "./template/template.module";

@NgModule({
  declarations: [
    AppComponent,
    IndexHeaderComponent,
    FooterIndexComponent,
    HomePageExcelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TemplateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
