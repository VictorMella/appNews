import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'defaultImage'
})
export class DefaultImagePipe implements PipeTransform {

  transform(value: string, type: string): string {
    const IMAGES = {
      news: './assets/images/images_default.jpg',
    };
    return value && value !== '' ? value : IMAGES[type];
  }

}
