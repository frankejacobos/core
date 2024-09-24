import { NgModule } from '@angular/core';
import { CardComponent } from './components/card/card.component';

@NgModule({
  declarations: [CardComponent],
  imports: [],
  exports: [CardComponent, AzuiModule],
})
export class AzuiModule {}
