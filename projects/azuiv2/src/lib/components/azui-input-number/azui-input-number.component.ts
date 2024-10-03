import { CommonModule } from '@angular/common';
import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { AzuiIcons } from '../../directives';

@Component({
  selector: 'azui-input-number',
  standalone: true,
  imports: [CommonModule, AzuiIcons],
  templateUrl: './azui-input-number.component.html',
  styleUrls: ['./azui-input-number.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AzuiInputNumberComponent),
      multi: true,
    },
  ],
})
export class AzuiInputNumberComponent implements ControlValueAccessor {
  /**
   * Por defecto horizontal
   */
  @Input()
  layout: 'vertical' | 'horizontal' = 'horizontal';

  /**
   * Por defecto false
   */
  @Input()
  background: boolean = false;

  /**
   * Por defecto 1
   */
  @Input()
  step: number = 1;

  /**
   * Por defecto 0
   */
  @Input()
  min: number = 0;

  /**
   * Por defecto 99
   */
  @Input()
  max: number = 99;

  isDisabled: boolean = false;
  value: number | null | undefined;

  onChangeCb?: (value: number) => void;

  onTouchedCb?: () => void;

  sumar(): void {
    if (this.value === null || this.value === undefined) {
      this.value = 0;
    }
    if (this.value + this.step > this.max) return;
    this.value += this.step;
    this.onChangeCb?.(this.value);
    this.onTouchedCb?.();
  }

  restar(): void {
    if (this.value === null || this.value === undefined) {
      this.value = 0;
    }
    if (this.value - this.step < this.min) return;
    this.value -= this.step;
    this.onChangeCb?.(this.value);
    this.onTouchedCb?.();
  }

  handleInput(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.value = Number(target.value);

    this.onChangeCb?.(this.value);
    this.onTouchedCb?.();
  }

  writeValue(obj: any): void {
    this.value = obj;
  }

  registerOnChange(fn: any): void {
    this.onChangeCb = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouchedCb = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }
}
