import { Component, Input } from '@angular/core';
import { ColumnaHeader } from '../../../interfaces';

@Component({
  selector: 'azui-table-head',
  templateUrl: './azui-table-head.component.html',
  styleUrls: ['./azui-table-head.component.scss'],
})
export class AzuiTableHeadComponent {
  @Input()
  columnas!: ColumnaHeader[];
}
