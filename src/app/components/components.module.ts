import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoalsComponent } from '../components/goals/goals.component';
import { RulesComponent } from '../components/rules/rules.component';
import { CreateGoalsComponent } from '../components/create-goals/create-goals.component';

@NgModule({
  entryComponents:[
  ],
  declarations: [
    RulesComponent,
    GoalsComponent,
  ],
  exports: [
    RulesComponent,
    GoalsComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
