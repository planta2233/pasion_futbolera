import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoalsComponent } from '../components/goals/goals.component';
import { RulesComponent } from '../components/rules/rules.component';
import { CreateGoalsComponent } from '../components/create-goals/create-goals.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  entryComponents:[
    GoalsComponent
  ],
  declarations: [
    GoalsComponent
  ],
  exports: [
    GoalsComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ComponentsModule { }
