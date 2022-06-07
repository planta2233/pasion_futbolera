import { Component, Input, OnInit } from '@angular/core';
import { FootballService } from '../../services/football.service';

@Component({
  selector: 'app-rules',
  templateUrl: './rules.component.html',
  styleUrls: ['./rules.component.scss'],
})
export class RulesComponent implements OnInit {

  @Input() data;

  public rulesOption = {
    team: null,
    goalSoccerType: null,
    amount: null
  };
  private limitRules: number = 5;
  public teams: any = [];
  public options: any;
  public rules: any = [];
  public showMyRules: Boolean = false;
  public showError: Boolean = false;
  public showErrorAmount: Boolean = false;

  constructor( private footballServices: FootballService ) { }

  ngOnInit() {
    console.log(this.data);
    this.footballServices.getSoccerBranch().subscribe( console.log );
    this.options = [
      { id: 1, value: 'play', text: 'Por cada juego' },
      { id: 2, value: 'victory', text: 'Por victoria' },
      { id: 3, value: 'goal', text: 'Por cada gol' },
    ];
    this.teams = [
      { id: 1, value: 'america', text: 'america' },
      { id: 2, value: 'chivas', text: 'chivas' },
      { id: 3, value: 'atlas', text: 'atlas' },
      { id: 1, value: 'tigres', text: 'tigres' },
      { id: 2, value: 'juarez', text: 'juarez' },
      { id: 3, value: 'monterrey', text: 'monterrey' },
    ];
  }

  addRule(){
    let ruleObject = {...this.rulesOption};

    if( this.rules.find( r => r.team === ruleObject.team ) ){
      this.showError = true;
      return false;
    }
    if( ruleObject.amount > this.data.amount ){
      this.showErrorAmount = true;
      return false;
    }

    if( this.rules.length < this.limitRules ){
      this.rules.push( ruleObject );
      this.rulesOption.goalSoccerType = null;
      this.rulesOption.team = null;
      this.rulesOption.amount = null;
      this.showError = false;
      this.showErrorAmount = false;
    }

    this.showMyRules = true;
  }

}
