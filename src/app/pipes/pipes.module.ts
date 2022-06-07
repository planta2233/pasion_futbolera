import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChoicePipe } from './choice.pipe';
import { EventsPipe } from './events.pipe';



@NgModule({
  declarations: [
    ChoicePipe,
    EventsPipe
  ],
  exports:[
    ChoicePipe,
    EventsPipe
  ],
  imports: [
    CommonModule
  ]
})
export class PipesModule { }
