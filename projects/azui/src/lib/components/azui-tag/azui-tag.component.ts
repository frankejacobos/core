import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { AzuiIcons } from '../../directives/azui-icons/azui-icons.directive';
import { TagSize, TiposDeTag } from '../../types';

@Component({
  selector: 'azui-tag',
  standalone: true,
  imports: [CommonModule, AzuiIcons],
  templateUrl: './azui-tag.component.html',
  styleUrls: ['./azui-tag.component.scss'],
})
export class AzuiTagComponent {
  @Input()
  tipo: TiposDeTag = 'default';

  @Input()
  icono?: string;

  @Input()
  nombre!: string;

  @Input()
  size?: TagSize = 'default';
}
