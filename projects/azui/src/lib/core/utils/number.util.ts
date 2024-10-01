export namespace NumberUtil {
  export function anteponerCero(numero: number, digitos: number): string {
    return ('0'.repeat(digitos) + numero).slice(-digitos);
  }

  export function sumaRedondeada(a: number, b: number): number {
    return Number((a + b).toFixed(2));
  }

  export function multiplicacionRedondeada(a: number, b: number): number {
    return Number((a * b).toFixed(2));
  }
}
