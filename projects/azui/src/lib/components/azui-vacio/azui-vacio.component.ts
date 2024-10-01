// import { Component, EventEmitter, Input, Output } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { AzuiIcons, AzuiButton } from '../../../public-api';
// import { RouterModule } from '@angular/router';

// @Component({
//   selector: 'azui-vacio',
//   standalone: true,
//   imports: [CommonModule, AzuiIcons, AzuiButton, RouterModule],
//   templateUrl: './azui-vacio.component.html',
//   styleUrls: ['./azui-vacio.component.scss'],
// })
// export class AzuiVacioComponent {
//   /**
//    * Por defecto no-data
//    */
//   @Input()
//   tipo: 'no-resultados' | 'no-data' = 'no-data';

//   @Input()
//   nombreModulo!: string;

//   @Input()
//   etiquetaBoton!: string;

//   @Input()
//   ruta?: string;

//   @Input()
//   mostrarBoton = true;

//   @Input()
//   mostrarError = false;

//   @Output()
//   noDataAction = new EventEmitter();

//   @Output()
//   busquedaAction = new EventEmitter();
// }
