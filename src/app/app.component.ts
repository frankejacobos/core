import { Component } from '@angular/core';
import { TipoRepuestaEnum } from 'azuiv2';
import { NzUploadFile } from 'ng-zorro-antd/upload';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public readonly TipoAlerta = TipoRepuestaEnum;

  public readonly afterUpload: (file: NzUploadFile) => boolean = (file) => {
    console.log({ file });
    return true;
  };
}
