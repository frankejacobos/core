import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { DateUtil, ValidadorUtil } from '../../../core/utils';

interface AzuiFecha {
  estaEnElMes: boolean;
  label: number;
  fecha: Date;
  valor: number;
  estaSeleccionado: boolean;
  esHoy: boolean;
  estaDeshabilitado: boolean;
}

enum DiasDeLaSemana {
  Domingo,
  Lunes,
  Martes,
  Miercoles,
  Jueves,
  Viernes,
  Sabado,
}

@Component({
  selector: 'azui-calendar',
  templateUrl: './azui-calendar.component.html',
  styleUrls: ['./azui-calendar.component.scss'],
})
export class AzuiCalendarComponent implements OnInit, OnChanges {
  @ViewChild('azCalendarIzquierdo')
  azCalendarIzquierdo!: AzuiCalendarComponent;

  @ViewChild('azCalendarDerecho')
  azCalendarDerecho!: AzuiCalendarComponent;

  @Input()
  fechaBase!: Date;

  @Output()
  fechaChange = new EventEmitter<Date>();

  @Output()
  seleccionFecha = new EventEmitter<{
    fecha: AzuiFecha;
    directly: boolean;
  }>();

  @Input()
  esDerecho = false;

  @Input()
  tieneFoco = false;

  /**
   * Incluye la fecha
   * Formato: yyyy-MM-dd
   */
  @Input()
  fechaMinima?: string;

  /**
   * Incluye la fecha
   * Formato: yyyy-MM-dd
   */
  @Input()
  fechaMaxima?: string;

  @Input()
  fechaHermana?: Date;

  fechas: AzuiFecha[][] = [];
  fechaSeleccionada?: AzuiFecha;

  fechaMinimaDate?: Date;
  fechaMaximaDate?: Date;

  ngOnInit(): void {
    if (ValidadorUtil.isNotEmpty(this.fechaMinima)) {
      this.fechaMinimaDate = DateUtil.fromYYYYMMDD(this.fechaMinima!);
    }
    if (ValidadorUtil.isNotEmpty(this.fechaMaxima)) {
      this.fechaMaximaDate = DateUtil.fromYYYYMMDD(this.fechaMaxima!);
    }
    this.inicializarFechas();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!changes['fechaBase'] || changes['fechaBase'].firstChange) return;

    this.inicializarFechas();
  }

  seleccionarFecha(nuevaFecha: AzuiFecha, directly: boolean = false) {
    if (nuevaFecha.estaDeshabilitado) return;
    if (!this.tieneFoco && !directly) {
      this.seleccionFecha.emit({
        fecha: nuevaFecha,
        directly: false,
      });
      return;
    }

    if (!this.fechaSeleccionada) {
      this.fechaSeleccionada = nuevaFecha;
      this.fechaSeleccionada.estaSeleccionado = true;
      this.fechaChange.emit(DateUtil.clone(this.fechaSeleccionada.fecha));
      return;
    }

    if (!this.fechaHermana) {
      this.seleccionFecha.emit({
        fecha: nuevaFecha,
        directly: true,
      });

      return;
    }

    this.fechaSeleccionada.estaSeleccionado = false;
    this.fechaSeleccionada = nuevaFecha;
    this.fechaSeleccionada.estaSeleccionado = true;
    this.fechaChange.emit(DateUtil.clone(this.fechaSeleccionada.fecha));
  }

  private inicializarFechas() {
    this.fechas = [];
    this.fechas.push(this.calcularPrimeraFila());
    for (let i = 0; i < 5; i++) {
      this.fechas.push(this.calcularRestoDeFilas());
    }
  }

  private calcularPrimeraFila(): AzuiFecha[] {
    const primerDia = new Date(
      this.fechaBase.getFullYear(),
      this.fechaBase.getMonth(),
      1
    );
    const fechas: AzuiFecha[] = [];

    if (primerDia.getDay() === DiasDeLaSemana.Domingo) {
      fechas.unshift({
        esHoy: DateUtil.compararFechas(primerDia, new Date()) === 0,
        estaEnElMes: true,
        estaSeleccionado: false,
        label: primerDia.getDate(),
        fecha: DateUtil.clone(primerDia),
        valor: DateUtil.getNumberValue(primerDia),
        estaDeshabilitado: this.obtenerEstaDeshabilitado(primerDia),
      });
      const mesAnterior = new Date(
        primerDia.getFullYear(),
        primerDia.getMonth(),
        primerDia.getDate()
      );
      for (let i = 0; i < 6; i++) {
        mesAnterior.setDate(mesAnterior.getDate() - 1);
        fechas.unshift({
          esHoy: false,
          estaEnElMes: false,
          estaSeleccionado: false,
          label: mesAnterior.getDate(),
          fecha: DateUtil.clone(mesAnterior),
          valor: DateUtil.getNumberValue(mesAnterior),
          estaDeshabilitado: this.obtenerEstaDeshabilitado(mesAnterior),
        });
      }
    } else if (primerDia.getDay() === DiasDeLaSemana.Lunes) {
      for (let i = 0; i < 7; i++) {
        fechas.push({
          esHoy: DateUtil.compararFechas(primerDia, new Date()) === 0,
          estaEnElMes: true,
          estaSeleccionado: false,
          label: primerDia.getDate(),
          fecha: DateUtil.clone(primerDia),
          valor: DateUtil.getNumberValue(primerDia),
          estaDeshabilitado: this.obtenerEstaDeshabilitado(primerDia),
        });
        primerDia.setDate(primerDia.getDate() + 1);
      }
    } else {
      const mesAnterior = new Date(
        primerDia.getFullYear(),
        primerDia.getMonth(),
        primerDia.getDate()
      );
      for (let i = 1; i < primerDia.getDay(); i++) {
        mesAnterior.setDate(mesAnterior.getDate() - 1);
        fechas.unshift({
          esHoy: false,
          estaEnElMes: false,
          estaSeleccionado: false,
          label: mesAnterior.getDate(),
          fecha: DateUtil.clone(mesAnterior),
          valor: DateUtil.getNumberValue(mesAnterior),
          estaDeshabilitado: this.obtenerEstaDeshabilitado(mesAnterior),
        });
      }
      while (fechas.length < 7) {
        fechas.push({
          esHoy: DateUtil.compararFechas(primerDia, new Date()) === 0,
          estaEnElMes: true,
          estaSeleccionado: false,
          label: primerDia.getDate(),
          fecha: DateUtil.clone(primerDia),
          valor: DateUtil.getNumberValue(primerDia),
          estaDeshabilitado: this.obtenerEstaDeshabilitado(primerDia),
        });
        primerDia.setDate(primerDia.getDate() + 1);
      }
    }

    return fechas;
  }

  private calcularRestoDeFilas(): AzuiFecha[] {
    const fechas: AzuiFecha[] = [];

    const ultimoDia = new Date(
      this.fechaBase.getFullYear(),
      this.fechaBase.getMonth() + 1,
      1
    );
    ultimoDia.setDate(ultimoDia.getDate() - 1);

    const ultimoArreglo = this.fechas[this.fechas.length - 1];
    const ultimoDiaEnArreglo = ultimoArreglo[ultimoArreglo.length - 1];
    const fechaAIterar = new Date(
      ultimoDiaEnArreglo.fecha.getFullYear(),
      ultimoDiaEnArreglo.fecha.getMonth(),
      ultimoDiaEnArreglo.fecha.getDate()
    );
    fechaAIterar.setDate(fechaAIterar.getDate() + 1);

    for (let i = 0; i < 7; i++) {
      fechas.push({
        esHoy: DateUtil.compararFechas(fechaAIterar, new Date()) === 0,
        estaEnElMes: DateUtil.compararFechas(fechaAIterar, ultimoDia) <= 0,
        estaSeleccionado: false,
        fecha: DateUtil.clone(fechaAIterar),
        label: fechaAIterar.getDate(),
        valor: DateUtil.getNumberValue(fechaAIterar),
        estaDeshabilitado: this.obtenerEstaDeshabilitado(fechaAIterar),
      });
      fechaAIterar.setDate(fechaAIterar.getDate() + 1);
    }

    return fechas;
  }

  private obtenerEstaDeshabilitado(fecha: Date): boolean {
    if (!this.fechaMinimaDate && !this.fechaMaximaDate) return false;

    if (this.fechaMinimaDate && this.fechaMaximaDate) {
      return !(
        DateUtil.compararFechas(fecha, this.fechaMinimaDate) >= 0 &&
        DateUtil.compararFechas(fecha, this.fechaMaximaDate!) <= 0
      );
    }

    if (this.fechaMinimaDate) {
      return DateUtil.compararFechas(fecha, this.fechaMinimaDate) < 0;
    }

    return DateUtil.compararFechas(fecha, this.fechaMaximaDate!) > 0;
  }
}
