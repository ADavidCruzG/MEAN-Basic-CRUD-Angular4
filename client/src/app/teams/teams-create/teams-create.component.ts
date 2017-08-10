import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {TeamsService} from '../teams.service';
import {ToasterService} from 'angular2-toaster';

@Component({
  selector: 'app-teams-create',
  templateUrl: './teams-create.component.html',
  styleUrls: ['./teams-create.component.css']
})
export class TeamsCreateComponent implements OnInit {

  team = {};
  currentYear = 0;

  constructor(private teamsService: TeamsService, private router: Router, private toasterService: ToasterService) {
  }

  ngOnInit() {
    this.currentYear = new Date().getFullYear();
  }

  createTeam() {
    this.teamsService.createTeam(this.team)
      .then(() => {
        this.toasterService.pop('success', 'Proceso exitoso', 'El equipo se creó exitosamente');
        this.router.navigate(['home']);
      }, (err) => {
        this.toasterService.pop('error', 'Error', 'Error: ' + err.toString());
        console.log(err);
      });
  }
}
