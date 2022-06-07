import { Component, OnInit, ViewChild  } from '@angular/core';
import { IonDatetime, ModalController } from '@ionic/angular';
import { format, parseISO, getDate, getMonth, getYear } from 'date-fns';
import { RulesComponent } from '../../components/rules/rules.component';

@Component({
  selector: 'app-create-goals',
  templateUrl: './create-goals.component.html',
  styleUrls: ['./create-goals.component.scss'],
})
export class CreateGoalsComponent implements OnInit {
  @ViewChild(IonDatetime, { static: true }) datetime: IonDatetime;

  public options = [];

  public choiceGoal = { 
    choseType: null,
    dateValue: null,
    amount: null,
  }
  public today: any;
  public showErrors: Boolean = false;
  public showPreview: Boolean = false;
  private minDays: number = 30;

  constructor( private modalCtrl: ModalController ) { }

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
    if( !this.choiceGoal.dateValue || this.choiceGoal.amount <= 0 || !this.choiceGoal.choseType ){
      this.showErrors = true;
      return false;
    }else{
      this.showErrors = false;
      this.modalCtrl.dismiss();
      this.nextStep();
    }
  }

  async nextStep(){

    const modal = await this.modalCtrl.create({
      component: RulesComponent,
      componentProps: {
        data: this.choiceGoal
      }
    });

    modal.present();
  }

}
