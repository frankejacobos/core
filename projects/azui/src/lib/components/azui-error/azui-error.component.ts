import { CommonModule } from '@angular/common';
import {
  Component,
  ContentChild,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { AzuiInputGroupComponent } from '../azui-input/azui-input-group/azui-input-group.component';
import { AzuiTextareaComponent } from '../azui-textarea/azui-textarea.component';
import { ValidadorUtil } from '../../core/utils';

@Component({
  selector: 'azui-error',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './azui-error.component.html',
  styleUrls: ['./azui-error.component.scss'],
})
export class AzuiErrorComponent implements OnChanges {
  @Input()
  errorMessage?: string;

  @Input()
  isDisabled = false;

  @ContentChild(AzuiInputGroupComponent)
  azuiInput?: AzuiInputGroupComponent;

  @ContentChild(AzuiTextareaComponent)
  azuiTextarea?: AzuiTextareaComponent;

  ngOnChanges(changes: SimpleChanges): void {
    this.handleInputsErrors();
  }

  ngAfterContentInit(): void {
    this.handleInputsErrors();
  }

  private handleInputsErrors() {
    this.handleAzuiInput();
    this.handleAzuiTextarea();
  }

  private handleAzuiInput(): void {
    if (!this.azuiInput) return;
    this.azuiInput.hasError = ValidadorUtil.isNotEmpty(this.errorMessage);
  }

  private handleAzuiTextarea(): void {
    if (!this.azuiTextarea) return;
    this.azuiTextarea.hasError = ValidadorUtil.isNotEmpty(this.errorMessage);
  }
}
