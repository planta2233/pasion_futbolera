import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CreateGoalsComponent } from './components/create-goals/create-goals.component';
import { FormsModule } from '@angular/forms';
import { RulesComponent } from './components/rules/rules.component';
import { HttpClient, HttpClientModule } from '@angular/common/http'
import { PipesModule } from './pipes/pipes.module';
import { GoalsComponent } from './components/goals/goals.component';
import { FootballService } from './services/football.service';
import { HTTP } from '@awesome-cordova-plugins/http/ngx';

@NgModule({
  declarations: [AppComponent, CreateGoalsComponent, RulesComponent],
  entryComponents: [
  ],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, FormsModule, HttpClientModule, PipesModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },FootballService, HttpClientModule, HttpClient, HTTP],
  bootstrap: [AppComponent],
})
export class AppModule {}
