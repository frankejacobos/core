import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {
  AzuiButton,
  AzuiAlertModule,
  AzuiCheckboxComponent,
  AzuiCopyComponent,
} from 'dist/azuiv2';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AzuiButton,
    AzuiAlertModule,
    AzuiCheckboxComponent,
    AzuiCopyComponent,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
