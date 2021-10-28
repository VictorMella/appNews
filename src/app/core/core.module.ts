import { NgModule } from '@angular/core';
import { DefaultImagePipe } from './pipes/images-defaunt.pipe'

@NgModule({
  declarations: [DefaultImagePipe],
  imports: [

  ],
  exports:[
    DefaultImagePipe,
  ]
})
export class CoreModule { }
