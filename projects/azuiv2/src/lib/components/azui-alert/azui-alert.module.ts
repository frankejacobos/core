import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AzuiAlertComponent } from './azui-alert.component';
import { TipoIconoAlertaPipe } from './pipes/tipo-icono-alerta.pipe';
import { AzuiIcons } from '../../directives';

@NgModule({
  declarations: [AzuiAlertComponent, TipoIconoAlertaPipe],
  imports: [CommonModule, AzuiIcons],
  exports: [AzuiAlertComponent],
})
export class AzuiAlertModule {}
