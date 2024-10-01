import { DownloadFile } from '../../interfaces';

interface IDescargarReporte {
  /**
   * Nombre del archivo a descargar sin incluir la extensión
   */
  nombreDelArchivo: string;

  /**
   * Extension del archivo, incluyendo al inicio el .
   * Ejemplo: .xlsx
   * @Default .xlsx
   */
  extensionDelArchivo?: string;
}

export namespace ReporteUtil {
  export function descargarReporte(downloadFile: DownloadFile): void {
    let url = window.URL.createObjectURL(downloadFile.file);
    let a = document.createElement('a');
    a.setAttribute('style', 'display: none');
    a.href = url;
    a.download = downloadFile.filename;
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    a.remove();
  }
}
