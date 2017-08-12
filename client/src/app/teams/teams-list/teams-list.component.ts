import {Component, OnInit} from '@angular/core';
import {Pipe, PipeTransform} from '@angular/core';
import {TeamsService} from '../teams.service';
import {ToasterService} from 'angular2-toaster';

@Component({
  selector: 'app-teams-list',
  templateUrl: './teams-list.component.html',
  styleUrls: ['./teams-list.component.css']
})

export class TeamsListComponent implements OnInit {

  teamsList = [];

  //Team to delete
  teamToDelete = {_id: '', name: ''};
  teamIndex = 0;

  //Filters
  isDesc = false;
  columnFilter = 'name';
  filterDirection: number;

  //Modal
  modalTitle = 'Eliminar equipo';
  modalBody = '';

  constructor(private teamsService: TeamsService, private toasterService: ToasterService) {
    this.deleteTeam = this.deleteTeam.bind(this);
  }

  ngOnInit() {
    this.getAllTeams();
  }

  getAllTeams() {
    this.teamsService.getAllTeams()
      .then((teams) => {
        this.teamsList = Object.keys(teams).map((key) => {
          return teams[key]
        });
      }, (err) => {
        this.toasterService.pop('error', 'Error', 'Error: ' + err.toString());
        console.log(err);
      });
  }

  sortTable(columnFilter) {
    this.isDesc = !this.isDesc;
    this.columnFilter = columnFilter;
    this.filterDirection = this.isDesc ? 1 : -1;
  }

  trackById(index, team) {
    return team ? team._id : undefined;
  }

  openModal(teamToDelete, index){
    this.modalBody = '¿Realmente desaea eliminar el equipo ' + teamToDelete.name + '?';
    this.teamToDelete = teamToDelete;
    this.teamIndex = index;
  }

  deleteTeam() {
    this.teamsService.deleteTeam(this.teamToDelete._id)
      .then((response) => {
        this.toasterService.pop('success', 'Proceso exitoso', 'El equipo ' + this.teamToDelete.name + ' se eliminó exitosamente');
      }, (err) => {
        this.toasterService.pop('error', 'Error', 'Error: ' + err.toString());
        console.log(err);
      });
    this.teamsList.splice(this.teamIndex, 1);
  }
}

@Pipe({name: 'orderBy'})
export class OrderByPipe implements PipeTransform {

  transform(teamsRecords: Array<any>, args?: any): any {
    return teamsRecords.sort(function (a, b) {
      if (a[args.columnFilter] < b[args.columnFilter]) {
        return -1 * args.filterDirection;
      }
      else if (a[args.columnFilter] > b[args.columnFilter]) {
        return args.filterDirection;
      }
      else {
        return 0;
      }
    });
  };
}
