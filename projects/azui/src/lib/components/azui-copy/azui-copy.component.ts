// import { CommonModule } from '@angular/common';
// import { Component, Input } from '@angular/core';
// import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
// import { AzuiIcons } from '../../directives/azui-icons/azui-icons.directive';
// import { AzuiButton } from '../../../public-api';

// @Component({
//   selector: 'azui-copy',
//   standalone: true,
//   imports: [CommonModule, AzuiIcons, NzToolTipModule, AzuiButton],
//   templateUrl: './azui-copy.component.html',
//   styleUrls: ['./azui-copy.component.scss'],
// })
// export class AzuiCopyComponent {
//   @Input()
//   texto!: string | number;

//   @Input()
//   tooltipMessage = 'Copiar';

//   @Input()
//   feedbackMessage = '¡Copiado!';

//   @Input()
//   tiempoDeEspera: number = 1200;

//   @Input()
//   size = '16px';

//   @Input()
//   color = 'text-primary-5';

//   /**
//    * Por defecto icono
//    */
//   @Input()
//   tipo: 'icono' | 'boton' = 'icono';

//   public estaCopiando = false;
//   private t: any;

//   copiar() {
//     if (this.estaCopiando) return;

//     this.estaCopiando = true;
//     navigator.clipboard.writeText(this.texto.toString());
//     this.t = setTimeout(() => {
//       this.estaCopiando = false;
//       clearTimeout(this.t);
//     }, this.tiempoDeEspera);
//   }
// }
