import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CreateGoalsComponent } from '../components/create-goals/create-goals.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor( private modalCtrl: ModalController ) {}

  async createGoal(){
    const modal = await this.modalCtrl.create({
      component: CreateGoalsComponent
    });

    modal.present();
  }

}
