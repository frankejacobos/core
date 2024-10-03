import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { AzuiIcons } from '../../directives';
import { TipoRepuestaEnum } from '../../core';

@Component({
  selector: 'azui-message',
  standalone: true,
  imports: [CommonModule, AzuiIcons],
  templateUrl: './azui-message.component.html',
  styleUrls: ['./azui-message.component.scss'],
})
export class AzuiMessageComponent {
  @Input()
  tipoRespuesta?: TipoRepuestaEnum = TipoRepuestaEnum.Neutral;

  @Input()
  descripcion!: string;

  @Input()
  mostrarCerrar: boolean = false;

  public readonly iconos: any = {};
  TipoRespuestaType = TipoRepuestaEnum;

  constructor() {
    this.iconos[TipoRepuestaEnum.Success.toString()] = 'check';
    this.iconos[TipoRepuestaEnum.Warning.toString()] = 'alerta';
    this.iconos[TipoRepuestaEnum.Error.toString()] = 'equis';
    this.iconos[TipoRepuestaEnum.Neutral.toString()] = 'info';
    this.iconos[TipoRepuestaEnum.Primary.toString()] = 'portal-quipu';
  }
}
