import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AzuiModule } from '../../projects/azui/src/lib/azui.module';
import { EstilosGlobales } from '../../projects/azui/src/lib/utils';
import { AzuiButton } from '../../projects/azui/src/lib/directives/azui-button/azui-button.directive';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AzuiModule, AzuiButton],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() {
    const estilosGlobales = new EstilosGlobales();
    const colores = estilosGlobales.colores;

    estilosGlobales
      .inicializarBotonesAzui()
      .agregarEstiloDeBoton('primary', {
        fondo: colores['primary-5'],
        texto: colores['inverse'],
        borde: colores['primary-5'],
        fondoHover: colores['primary-4'],
        textoHover: colores['inverse'],
        bordeHover: colores['primary-4'],
        fondoFocus: colores['primary-6'],
        textoFocus: colores['inverse'],
        bordeFocus: 'transparent',
        fondoDeshabilitado: colores['primary-2'],
        textoDeshabilitado: colores['inverse'],
        bordeDeshabilitado: 'transparent',
        fondoPeligro: colores['danger-hard'],
        textoPeligro: colores['inverse'],
        bordePeligro: 'transparent',
      })
      .agregarEstiloDeBoton('neutral', {
        fondo: 'transparent',
        texto: colores['subordinate'],
        borde: 'transparent',
        fondoHover: 'transparent',
        textoHover: colores['base'],
        bordeHover: 'transparent',
        fondoFocus: colores['subordinate'],
        textoFocus: colores['inverse'],
        bordeFocus: colores['subordinate'],
        fondoDeshabilitado: colores['disabled'],
        textoDeshabilitado: colores['inverse'],
        bordeDeshabilitado: 'transparent',
      })
      .agregarEstiloDeBoton('outlined', {
        fondo: 'transparent',
        texto: colores['primary-5'],
        borde: colores['primary-3'],
        fondoHover: 'transparent',
        textoHover: colores['primary-4'],
        bordeHover: colores['primary-2'],
        fondoFocus: 'transparent',
        textoFocus: colores['primary-6'],
        bordeFocus: colores['primary-4'],
        fondoDeshabilitado: colores['inverse'],
        textoDeshabilitado: colores['primary-2'],
        bordeDeshabilitado: colores['primary-2'],
        fondoPeligro: colores['inverse'],
        textoPeligro: colores['danger-hard'],
        bordePeligro: colores['danger-medium'],
      })
      .agregarEstiloDeBoton('secondary', {
        fondo: colores['inverse'],
        texto: colores['primary-5'],
        borde: 'transparent',
        fondoHover: colores['inverse'],
        textoHover: colores['primary-4'],
        bordeHover: 'transparent',
        fondoFocus: colores['primary-1'],
        textoFocus: colores['base'],
        bordeFocus: 'transparent',
        fondoDeshabilitado: colores['inverse'],
        textoDeshabilitado: colores['disabled'],
        bordeDeshabilitado: 'transparent',
      })
      .agregarEstiloDeBoton('link', {
        fondo: 'transparent',
        texto: colores['primary-5'],
        borde: 'transparent',
        fondoHover: 'transparent',
        textoHover: colores['primary-4'],
        bordeHover: 'transparent',
        fondoFocus: 'transparent',
        textoFocus: colores['primary-6'],
        bordeFocus: 'transparent',
        fondoDeshabilitado: colores['inverse'],
        textoDeshabilitado: colores['primary-2'],
        bordeDeshabilitado: 'transparent',
      })
      .agregarEstiloDeBoton('text', {
        fondo: 'transparent',
        texto: colores['primary-4'],
        borde: 'transparent',
        fondoHover: colores['primary-1'],
        textoHover: colores['primary-5'],
        bordeHover: 'transparent',
        fondoFocus: colores['primary-2'],
        textoFocus: colores['primary-6'],
        bordeFocus: 'transparent',
        fondoDeshabilitado: 'transparent',
        textoDeshabilitado: colores['disabled'],
        bordeDeshabilitado: 'transparent',
      })
      .aplicarTodosLosEstilos();
  }
}
