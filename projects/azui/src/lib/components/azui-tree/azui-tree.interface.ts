export interface AzuiTree {
  id: number | string;
  label: string;
  iconoHoja?: string;
  hijos?: AzuiTree[];
  estaSeleccionado?: boolean;
  estaExpandido?: boolean;
  extra?: number | string;
}

export type AzuiTreeSeleccion = (nodo?: AzuiTree) => void;
