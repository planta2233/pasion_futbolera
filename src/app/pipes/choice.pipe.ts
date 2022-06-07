import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'choice'
})
export class ChoicePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    let options = [
      {id: 1, value: 'buy', text: 'Comprar algo'},
      {id: 1, value: 'travel', text: 'Viajar'},
      {id: 1, value: 'todo', text: 'Hacer algo'}
    ];
    return options.find( o => o.value === value ).text;
  }

}
