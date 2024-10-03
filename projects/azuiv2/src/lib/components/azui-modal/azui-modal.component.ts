import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { AzuiButton } from '../../directives';

@Component({
  selector: 'azui-modal',
  standalone: true,
  imports: [CommonModule, NzModalModule, AzuiButton],
  templateUrl: './azui-modal.component.html',
  styleUrls: ['./azui-modal.component.scss'],
})
export class AzuiModalComponent implements OnChanges {
  @Input()
  isVisible!: boolean;

  @Input()
  handleCancel!: Function;

  /**
   * Por defecto es true
   */
  @Input()
  estaCentrado: boolean = true;

  @Input()
  titulo?: string;

  @Input()
  descripcion?: string;

  @Input()
  etiquetaCancelar?: string;

  @Input()
  etiquetaAceptar?: string;

  @Input()
  width?: string;

  @Input()
  maxWidth?: string;

  @Input()
  maxHeight?: string;

  @Output()
  submit = new EventEmitter<boolean>();

  maxWidthProcesado?: string;

  ngOnChanges(changes: SimpleChanges): void {
    if (this.isVisible || !changes['maxWidth']) return;

    const padding = 48;
    const currentMaxWidth: string = changes['maxWidth'].currentValue;
    const rawWidth = Number(
      currentMaxWidth.substring(0, currentMaxWidth.indexOf('px'))
    );
    this.maxWidthProcesado = `${rawWidth + padding}px`;
  }
}
