import { Component, Input, OnInit } from '@angular/core';
import { FootballService } from '../../services/football.service';

@Component({
  selector: 'app-rules',
  templateUrl: './rules.component.html',
  styleUrls: ['./rules.component.scss'],
})
export class RulesComponent implements OnInit {

  @Input() data;
  @Input() editMode;

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
    if( this.editMode ){
      if( localStorage.getItem('goalObject') ){
        let goalsData = JSON.parse( localStorage.getItem('goalObject') );
        this.rules = goalsData.find( (g) => g.id === this.data.id ).rules;
        this.showMyRules = true;
      }
    }
    this.footballServices.getSoccerBranch();
    this.options = [
      { id: 1, value: 'play', text: 'Por cada juego' },
      { id: 2, value: 'victory', text: 'Por victoria' },
      { id: 3, value: 'goal', text: 'Por cada gol' },
    ];
    this.teams = [
      { id: 1, value: 'Chelsea', text: 'Chelsea' },
      { id: 2, value: 'Manchester City', text: 'Manchester City' },
      { id: 3, value: 'Inter Milán', text: 'Inter Milán' },
      { id: 1, value: 'Bayern Múnich', text: 'Bayern Múnich' },
      { id: 2, value: 'Villarreal', text: 'Villarreal' },
      { id: 3, value: 'Real Madrid', text: 'Real Madrid' },
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

      if( localStorage.getItem('goalObject') ){
        let goalsData = JSON.parse( localStorage.getItem('goalObject') );
        const index = goalsData.map(g => g.id).indexOf(this.data.id);

        goalsData[index].rules.push( ruleObject );
        localStorage.setItem('goalObject', JSON.stringify(goalsData));
        
      }
    }

    this.showMyRules = true;
  }

}
