import { CommonModule } from '@angular/common';
import {
  Component,
  ElementRef,
  forwardRef,
  Input,
  ViewChild,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { AzuiIcons } from '../../directives/azui-icons/azui-icons.directive';

@Component({
  selector: 'azui-checkbox',
  standalone: true,
  imports: [CommonModule, AzuiIcons],
  templateUrl: './azui-checkbox.component.html',
  styleUrls: ['./azui-checkbox.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AzuiCheckboxComponent),
      multi: true,
    },
  ],
})
export class AzuiCheckboxComponent implements ControlValueAccessor {
  @Input()
  label?: string;

  @ViewChild('check')
  checkRef!: ElementRef<HTMLInputElement>;

  estaSeleccionado?: boolean;
  isDisabled: boolean = false;

  onChangeCb?: (estaActivo: boolean) => void;
  onTouchedCb?: () => void;

  seleccionar(e: MouseEvent) {
    this.estaSeleccionado = !this.estaSeleccionado;
    this.onChangeCb?.(this.estaSeleccionado);
    e.stopPropagation();
  }

  writeValue(obj: any): void {
    this.estaSeleccionado = obj;
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
