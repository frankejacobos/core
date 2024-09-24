import { BASE_COLOR_CONFIG, BASE_SIZES } from '.';
import { ColoresBoton, IEstilosGlobales } from './estilos.types';

/**
 * EstilosGlobales define un conjunto de métodos para inicializar y aplicar estilos de color
 * y propiedades de diseño en un sistema de estilos.
 */
export class EstilosGlobales implements IEstilosGlobales {
  private _elementoDeEstilos: HTMLStyleElement;
  private _claves: Record<string, string>;

  constructor(
    readonly colores: typeof BASE_COLOR_CONFIG = BASE_COLOR_CONFIG,
    private readonly _sizes: Array<number> = BASE_SIZES
  ) {
    this._elementoDeEstilos = document.createElement('style');
    this._claves = { margin: 'm', padding: 'p' };
  }

  inicializarColores(): this {
    this._elementoDeEstilos.textContent += Object.entries(this.colores)
      .map(
        ([name, color]) => `
          .background-${name} { background-color: ${color}; }
          .text-${name} { color: ${color}; }
          .border-${name} { border: 1px solid ${color}; }
          .border-top-${name} { border-top: 1px solid ${color}; }
          .border-right-${name} { border-right: 1px solid ${color}; }
          .border-bottom-${name} { border-bottom: 1px solid ${color}; }
          .border-left-${name} { border-left: 1px solid ${color}; }
          .border-x-${name} { border-left: 1px solid ${color}; border-right: 1px solid ${color}; }
          .border-y-${name} { border-top: 1px solid ${color}; border-bottom: 1px solid ${color}; }`
      )
      .join('\n');

    return this;
  }

  inicializarTextosYFlex(): this {
    this._elementoDeEstilos.textContent += `
      .text-uppercase { text-transform: uppercase; }
      .text-center { text-align: center; }
      .text-right { text-align: right; }
      .text-left { text-align: left; }
      .text-ellipsis { display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 2; overflow: hidden; text-overflow: ellipsis; word-wrap: break-word; }
      .text-ellipsis-3-lines { display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 3; overflow: hidden; text-overflow: ellipsis; word-wrap: break-word; }
      .text-bold { font-weight: bold; }
      .text-semi-bold { font-weight: 600; }
      .text-regular { font-weight: 400; }
      .text-medium { font-weight: 500; }
      .text-input-label { font-size: 10px; line-height: 140%; letter-spacing: -0.02em; }
      .text-description { font-size: 12px; line-height: 140%; font-weight: 400; }
      .flex { display: flex; }
      .flex-column { flex-direction: column; }
      .flex-wrap { flex-wrap: wrap; }
      .items-start { align-items: flex-start; }
      .items-center { align-items: center; }
      .items-end { align-items: flex-end; }
      .item-self-start { align-self: flex-start; }
      .item-self-center { align-self: center; }
      .item-self-end { align-self: flex-end; }
      .justify-center { justify-content: center; }
      .justify-space-between { justify-content: space-between; }
      .justify-end { justify-content: flex-end; }
      .m-auto { margin: auto; }
      .expanded { flex: 1 1; }
      .expanded-scrollable-y { flex: 1 1 auto; overflow-x: hidden; overflow-y: auto; height: 0; }
      .w50 { width: 50%; }
      .w100 { width: 100%; }
      .h100 { height: 100%; }
      .w100-screen { width: 100vw; }
      .h100-screen { height: 100vh; }`;

    return this;
  }

  inicializarBotonesAzui(): this {
    this._elementoDeEstilos.textContent += `
      .az-button {
        display: inline-flex;
        gap: 8px;
        border-radius: 8px;
        transition: 0.3s ease;
        align-items: center;
        justify-content: center;
        cursor: pointer;
      }
  
      .az-button__disabled {
        cursor: not-allowed;
      }
    
      .az-button > span[azui-icons] {
        height: 16px;
      }
    
      .az-button-normal {
        height: 42px;
        padding: 8px 24px;
      }
    
      @media (max-width: 982px) {
        .az-button-normal {
          height: 52px;
        }
      }
    
      .az-button-icon {
        width: 42px;
        height: 42px;
        padding: 8px;
      }
    
      .az-button-link {
        padding: 0;
      }
  `;

    return this;
  }

  private _inicializarEspaciado(tipo: 'margin' | 'padding'): this {
    const prop = this._claves[tipo];
    const styles = this._sizes
      .map(
        (size) => `
        .${prop}-${size} { ${tipo}: ${size}px; }
        .${prop}t-${size} { ${tipo}-top: ${size}px; }
        .${prop}r-${size} { ${tipo}-right: ${size}px; }
        .${prop}b-${size} { ${tipo}-bottom: ${size}px; }
        .${prop}l-${size} { ${tipo}-left: ${size}px; }
        .${prop}x-${size} { ${tipo}-right: ${size}px; ${tipo}-left: ${size}px; }
        .${prop}y-${size} { ${tipo}-top: ${size}px; ${tipo}-bottom: ${size}px; }
      `
      )
      .join('\n');

    this._elementoDeEstilos.textContent += styles;
    return this;
  }

  inicializarBordes(): this {
    this._elementoDeEstilos.textContent += this._sizes
      .map(
        (size) => `
          .br-${size} { border-radius: ${size}px; }
          .br-tl-${size} { border-top-left-radius: ${size}px; }
          .br-tr-${size} { border-top-right-radius: ${size}px; }
          .br-bl-${size} { border-bottom-left-radius: ${size}px; }
          .br-br-${size} { border-bottom-right-radius: ${size}px; }`
      )
      .join('\n');

    return this;
  }

  inicializarMargenes(): this {
    return this._inicializarEspaciado('margin');
  }

  inicializarPadding(): this {
    return this._inicializarEspaciado('padding');
  }

  inicializarEspaciado(): this {
    this._elementoDeEstilos.textContent += this._sizes
      .map((size) => `.gap-${size} { gap: ${size}px; }`)
      .join('\n');

    return this;
  }

  aplicarEstilos(): this {
    document.head.appendChild(this._elementoDeEstilos);
    return this;
  }

  agregarEstiloDeBoton(nombre: string, colores: ColoresBoton): this {
    this._elementoDeEstilos.textContent += `
    .az-button-${nombre} {
      background-color: ${colores.fondo};
      color: ${colores.texto};
      border: 1px solid ${colores.borde};

      &:hover {
        background-color: ${colores.fondoHover};
        color: ${colores.textoHover};
        border-color: ${colores.bordeHover};
      }

      &:active,
      &:focus {
        background-color: ${colores.fondoFocus};
        color: ${colores.textoFocus};
        border-color: ${colores.bordeFocus};
        outline: none;
      }
    }

    .az-button-${nombre}__disabled {
      background-color: ${colores.fondoDeshabilitado};
      color: ${colores.textoDeshabilitado};
      border: 1px solid ${colores.bordeDeshabilitado};
    }

    .az-button-${nombre}__danger {
      background-color: ${colores.fondoPeligro || 'red'};
      color: ${colores.textoPeligro || 'red'};
      border: 1px solid ${colores.bordePeligro || 'red'};

      &:hover {
        background-color: ${colores.fondoPeligro || 'red'};
        color: ${colores.textoPeligro || 'red'};
        border-color: ${colores.bordePeligro || 'red'};
      }

      &:active,
      &:focus {
        background-color: ${colores.fondoPeligro || 'red'};
        color: ${colores.textoPeligro || 'red'};
        border-color: ${colores.bordePeligro || 'red'};
        outline: none;
      }
    }`;

    return this;
  }

  aplicarTodosLosEstilos(): this {
    console.time();
    this.inicializarBordes()
      .inicializarColores()
      .inicializarEspaciado()
      .inicializarMargenes()
      .inicializarPadding()
      .inicializarTextosYFlex()
      .aplicarEstilos();

    console.timeEnd();
    console.log('🚀 ~ Azui se ha inicializado correctamente');
    return this;
  }
}
