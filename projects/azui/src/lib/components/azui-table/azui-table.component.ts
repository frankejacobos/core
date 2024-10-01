import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ColumnaHeader } from '../../../public-api';

@Component({
  selector: 'azui-table',
  templateUrl: './azui-table.component.html',
  styleUrls: ['./azui-table.component.scss'],
})
export class AzuiTableComponent implements OnInit {
  @Input()
  totalData?: number;

  @Input()
  columnas!: ColumnaHeader[];

  @Input()
  cantidadFilasSkeleton = 6;

  @Input()
  nombreModulo?: string;

  @Input()
  etiquetaBoton?: string;

  @Input()
  mostrarBoton = true;

  @Input()
  esPaginado = false;

  @Input()
  mostrarError = false;

  @Input()
  ruta?: string;

  /**
   * Por defecto no-data
   */
  @Input()
  tipoResultados: 'no-resultados' | 'no-data' = 'no-data';

  @Output()
  noDataAction = new EventEmitter();

  @Output()
  busquedaAction = new EventEmitter();

  skeleton: number[] = [];

  ngOnInit(): void {
    this.skeleton = Array.from(Array(this.cantidadFilasSkeleton).keys());
  }
}
