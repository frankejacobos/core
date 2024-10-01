export namespace ValidadorUtil {
  export function isNotEmpty(valor: string | null | undefined): boolean {
    if (valor === null || valor === undefined) return false;

    return valor.trim().length > 0;
  }
  export function isDefined(
    valor: number | Date | Date[] | null | undefined
  ): boolean {
    return valor !== null && valor !== undefined;
  }
}
