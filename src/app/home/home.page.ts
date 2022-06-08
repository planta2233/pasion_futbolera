import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CreateGoalsComponent } from '../components/create-goals/create-goals.component';
import { FootballService } from '../services/football.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public goals: any = [];
  
  constructor( private modalCtrl: ModalController, private footballServices: FootballService ) {}

  ngOnInit() {
    if( localStorage.getItem('goalObject') ){
      this.goals = JSON.parse( localStorage.getItem('goalObject') );
    }
  }

  async createGoal( target ){
    console.log(target)
    const modal = await this.modalCtrl.create({
      component: CreateGoalsComponent,
      componentProps: {
        data: target
      }
    });

    modal.present();
  }

}
