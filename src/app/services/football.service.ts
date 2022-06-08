import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class FootballService {

  private host = "https://api.football-data.org/v4"
  constructor( private http: HttpClient ) { }

  getSoccerBranch(){
    
    const header = new HttpHeaders().set('Access-Control-Allow-Origin', '*')
    .set('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT')
    .set('Accept', 'application/json')
    .set('Content-Type', 'application/json; charset=utf-8')
    .set('X-Auth-Token', '5eaa1d8e4678457f9249e9c465d05b81')

    return this.http.get(`${this.host}/competitions/CL/teams?season=2021`, { headers: header });

  }

}
