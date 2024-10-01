import { Component, Input } from '@angular/core';
import { AzuiSelectComponent } from '../azui-select.component';

@Component({
  selector: 'azui-option',
  templateUrl: './azui-option.component.html',
  styleUrls: ['./azui-option.component.scss'],
})
export class AzuiOptionComponent {
  @Input()
  id!: string | number;

  @Input()
  label!: string;

  @Input()
  esSeleccionMultiple = false;

  estaSeleccionado = false;

  constructor(private readonly azuiSelect: AzuiSelectComponent) {}

  seleccionar() {
    this.estaSeleccionado = !this.esSeleccionMultiple;
    this.azuiSelect.seleccionar(this.id);
  }

  cambio(nuevoValor: boolean) {
    this.estaSeleccionado = nuevoValor;
    this.azuiSelect.seleccionar(this.id);
  }
}
