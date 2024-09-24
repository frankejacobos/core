export interface IEstilosGlobales {
  /**
   * Inicializa las variables de color para su uso en el estilo.
   * Este método debe configurar los valores de color necesarios y sus nombres de clase correspondientes.
   */
  inicializarColores(): void;

  /**
   * Inicializa los estilos relacionados con el texto y flexbox.
   * Este método debe configurar estilos de fuente, tamaños y otras propiedades relacionadas con el texto,
   * así como estilos de diseño flexibles.
   */
  inicializarTextosYFlex(): void;

  /**
   * Inicializa los estilos relacionados con los bordes.
   * Este método debe generar clases para varios estilos de borde, incluyendo el radio de borde
   * para las diferentes esquinas.
   */
  inicializarBordes(): void;

  /**
   * Inicializa los estilos relacionados con los márgenes.
   * Este método debe crear clases para establecer márgenes en los elementos, incluyendo arriba, derecha,
   * abajo, izquierda y clases abreviadas para márgenes horizontales y verticales.
   */
  inicializarMargenes(): void;

  /**
   * Inicializa los estilos relacionados con el padding.
   * Este método debe crear clases para establecer padding en los elementos, incluyendo arriba, derecha,
   * abajo, izquierda y clases abreviadas para padding horizontal y vertical.
   */
  inicializarPadding(): void;

  /**
   * Aplica todos los estilos inicializados por los otros métodos.
   * Este método debe asegurar que los estilos se rendericen y apliquen correctamente a los elementos
   * objetivo.
   */
  aplicarEstilos(): void;

  /**
   * Aplica todos los estilos inicializados por los métodos correspondientes.
   * Este método invoca internamente cada uno de los métodos de inicialización de estilos
   * (colores, textos, bordes, márgenes, padding, espaciado) y, al final, llama al método
   * `aplicarEstilos()` para agregar el elemento de estilo al documento.
   */
  aplicarTodosLosEstilos(): void;
}

export type ColoresBoton = {
  fondo: string;
  texto: string;
  borde: string;
  fondoHover: string;
  textoHover: string;
  bordeHover: string;
  fondoFocus: string;
  textoFocus: string;
  bordeFocus: string;
  fondoDeshabilitado: string;
  textoDeshabilitado: string;
  bordeDeshabilitado: string;
  fondoPeligro?: string;
  textoPeligro?: string;
  bordePeligro?: string;
};
