import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { AzuiIcons } from '../../directives/azui-icons/azui-icons.directive';
import { AzuiOptionComponent } from './azui-option/azui-option.component';
import { AzuiSelectComponent } from './azui-select.component';
import { AzuiCheckboxComponent } from '../azui-checkbox/azui-checkbox.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AzuiSelectComponent, AzuiOptionComponent],
  imports: [
    CommonModule,
    AzuiIcons,
    NzPopoverModule,
    AzuiCheckboxComponent,
    FormsModule,
  ],
  exports: [AzuiSelectComponent, AzuiOptionComponent],
})
export class AzuiSelectModule {}
