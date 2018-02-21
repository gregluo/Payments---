import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule }                             from '@angular/common';
import { FormsModule, ReactiveFormsModule }         from '@angular/forms';
import { AppComponent }  from './app.component';
import { PaymentService } from './app.service';
import { HttpModule } from '@angular/http';

@NgModule({
  imports:      [ CommonModule, FormsModule, ReactiveFormsModule, HttpModule, BrowserModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ],
  providers: [PaymentService],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AppModule { }
