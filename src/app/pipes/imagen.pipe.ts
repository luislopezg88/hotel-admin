import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform(img: string, ...args: unknown[]): unknown {
    return "Funciona!";
  }

}
