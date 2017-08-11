import {Component, OnInit} from '@angular/core';
import {TeamsService} from '../teams.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ToasterService} from 'angular2-toaster';

@Component({
  selector: 'app-teams-update',
  templateUrl: './teams-update.component.html',
  styleUrls: ['./teams-update.component.css']
})
export class TeamsUpdateComponent implements OnInit {

  team = {};
  currentYear = 0;
  idParam = '';

  constructor(private teamsService: TeamsService,
              private router: Router,
              private routeParams: ActivatedRoute,
              private toasterService: ToasterService) {
  }

  ngOnInit() {
    this.routeParams.params.subscribe(params => {
      this.idParam = params['id'];
    });

    this.currentYear = new Date().getFullYear();
    this.getTeam(this.idParam);
  }

  getTeam(teamId) {
    this.teamsService.getTeamById(teamId)
      .then((returnedTeam) => {
        this.team = returnedTeam;
      }, (err) => {
        this.toasterService.pop('error', 'Error', 'Error: ' + err.toString());
        console.log(err);
      })
  }

  updateTeam() {
    this.teamsService.updateTeam(this.idParam, this.team)
      .then(() => {
        this.toasterService.pop('success', 'Proceso exitoso', 'El equipo se actualizó exitosamente');
        this.router.navigate(['/teams/list']);
      }, (err) => {
        this.toasterService.pop('error', 'Error', 'Error: ' + err.toString());
        console.log(err);
      });
  }

}
