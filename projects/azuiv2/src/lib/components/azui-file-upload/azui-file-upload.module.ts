import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { AzuiFileUploadAnimationDirective } from './azui-file-upload-animation.directive';
import { AzuiFileUploadComponent } from './azui-file-upload.component';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { RouterModule } from '@angular/router';
import { AzuiButton, AzuiIcons } from '../../directives';

@NgModule({
  declarations: [AzuiFileUploadComponent, AzuiFileUploadAnimationDirective],
  imports: [
    CommonModule,
    RouterModule,
    NzUploadModule,
    AzuiButton,
    AzuiIcons,
    NzToolTipModule,
  ],
  exports: [AzuiFileUploadComponent],
})
export class AzuiFileUploadModule {}
