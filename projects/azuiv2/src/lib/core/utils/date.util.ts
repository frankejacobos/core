import { NumberUtil } from './number.util';

export namespace DateUtil {
  export function construirFormatDDMMYYYY(fecha: Date): string | null {
    if (!fecha) return null;

    const day = NumberUtil.anteponerCero(fecha.getDate(), 2);
    const month = NumberUtil.anteponerCero(fecha.getMonth() + 1, 2);
    const year = fecha.getFullYear();

    return `${day}-${month}-${year}`;
  }

  export function fromYYYYMMDD(fecha: string): Date {
    const parts = fecha.split('-');
    const year = Number(parts[0]);
    const month = Number(parts[1]) - 1;
    const day = Number(parts[2]);

    return new Date(year, month, day);
  }

  export function toYYYYMMDD(fecha: Date): string {
    const day = NumberUtil.anteponerCero(fecha.getDate(), 2);
    const month = NumberUtil.anteponerCero(fecha.getMonth() + 1, 2);
    const year = fecha.getFullYear();

    return `${year}-${month}-${day}`;
  }

  /**
   *
   * @returns 1 si la fecha a es mayor que b,
   * -1 si la fecha a es menor que b,
   * 0 si ambas fechas son iguales
   */
  export function compararFechas(a: Date, b: Date): 1 | 0 | -1 {
    const fechaA = getNumberValue(a);
    const fechaB = getNumberValue(b);

    if (fechaA - fechaB < 0) return -1;
    if (fechaA - fechaB > 0) return 1;
    return 0;
  }

  export function getNumberValue(a: Date): number {
    const yearA = a.getFullYear();
    const monthA = NumberUtil.anteponerCero(a.getMonth() + 1, 2);
    const dayA = NumberUtil.anteponerCero(a.getDate(), 2);
    return Number(`${yearA}${monthA}${dayA}`);
  }

  export function clone(a: Date): Date {
    return new Date(a.getTime());
  }
}
