import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AzuiModule } from '../../projects/azui/src/lib/azui.module';
import { AzuiButton } from '../../projects/azui/src/lib/directives/azui-button/azui-button.directive';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AzuiModule, AzuiButton],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
