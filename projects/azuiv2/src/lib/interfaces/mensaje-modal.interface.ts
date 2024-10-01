export interface MensajeModal {
  tipo: 'success' | 'error' | 'warning' | 'loading';
  mensaje: string;
  autoClose?: boolean;
  textoOk?: string;
  textoCancelar?: string;
  onCloseAction?: (esAceptar: boolean) => void;
}
