import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TeamsService {

  constructor(private http: Http) {
  }

  createTeam(teamToCreate) {
    return new Promise((resolve, reject) => {
      this.http.post('/api/teams', teamToCreate)
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  getAllTeams() {
    return new Promise((resolve, reject) => {
      this.http.get('/api/teams')
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  getTeamById(teamId) {
    return new Promise((resolve, reject) => {
      this.http.get('/api/teams/' + teamId)
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  updateTeam(teamId, teamToUpdate) {
    return new Promise((resolve, reject) => {
      this.http.put('/api/teams/' + teamId, teamToUpdate)
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  deleteTeam(teamId) {
    return new Promise((resolve, reject) => {
      this.http.delete('/api/teams/' + teamId)
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

}
