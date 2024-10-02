import { Component } from '@angular/core';
import { TipoRepuestaEnum } from 'azuiv2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public readonly TipoAlerta = TipoRepuestaEnum;
}
