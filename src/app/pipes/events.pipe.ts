import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'events'
})
export class EventsPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {

    let options = [
      { id: 1, value: 'play', text: 'Por cada juego' },
      { id: 2, value: 'victory', text: 'Por victoria' },
      { id: 3, value: 'goal', text: 'Por cada gol' },
    ];

    return options.find( o => o.value === value ).text;
  }

}
