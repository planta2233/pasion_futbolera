import { Component, OnInit, ViewChild  } from '@angular/core';
import { IonDatetime } from '@ionic/angular';
import { format, parseISO, getDate, getMonth, getYear } from 'date-fns';

@Component({
  selector: 'app-create-goals',
  templateUrl: './create-goals.component.html',
  styleUrls: ['./create-goals.component.scss'],
})
export class CreateGoalsComponent implements OnInit {
  @ViewChild(IonDatetime, { static: true }) datetime: IonDatetime;

  public options = [];

  public choceGoal = { 
    choseType: null,
    dateValue: null,
    amount: null,
  }
  public today: any;
  private minDays: number = 30;

  constructor() { }

  ngOnInit() {
    this.options = [
      {id: 1, value: 'buy', text: 'Comprar algo'},
      {id: 1, value: 'travel', text: 'Viajar'},
      {id: 1, value: 'todo', text: 'Hacer algo'}
    ];


    var newDate = new Date(Date.now() + this.minDays * 24*60*60*1000);
    this.today = this.formatDate( newDate.toISOString() );

  }

  formatDate(value: string) {
    return format(parseISO(value), 'MMM dd yyyy');
  }

  saveGoal(){
    console.log( this.choceGoal );
  }

}
