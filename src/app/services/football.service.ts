import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FootballService {

  constructor( private http: HttpClient ) { }

  getSoccerBranch(){

    /* const headers = new HttpHeaders({
      'X-Auth-Token':'5eaa1d8e4678457f9249e9c465d05b81', 
      'Content-Type': 'application/json',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'GET',
      'Access-Control-Allow-Origin': 'http://localhost:8100',
    }); */
    var headers = new HttpHeaders();
  headers.append('Content-Type', 'application/json');
  headers.append('X-Auth-Token', '5eaa1d8e4678457f9249e9c465d05b81');
  headers.append('Access-Control-Allow-Origin', 'http://localhost:8100');
  headers.append('Access-Control-Allow-Headers', 'Content-Type');
  headers.append('Access-Control-Allow-Methods', 'GET');
    return this.http.get(`api/v4/competitions/CL/teams?season=2021`, { headers: headers });

  }

}
