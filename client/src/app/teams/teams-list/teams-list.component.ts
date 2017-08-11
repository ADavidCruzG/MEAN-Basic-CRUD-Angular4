import { Component, OnInit } from '@angular/core';
import {Pipe, PipeTransform} from '@angular/core';
import {Router} from '@angular/router';
import {TeamsService} from '../teams.service';
import {ToasterService} from 'angular2-toaster';

@Component({
  selector: 'app-teams-list',
  templateUrl: './teams-list.component.html',
  styleUrls: ['./teams-list.component.css']
})

export class TeamsListComponent implements OnInit {

  teamsList = [];
  total = 0;

  //Filters
  isDesc = false;
  columnFilter = 'name';
  filterDirection: number;

  constructor(private teamsService: TeamsService, private router: Router, private toasterService: ToasterService) { }

  ngOnInit() {
    this.getAllTeams();
  }

  getAllTeams() {
    this.teamsService.getAllTeams()
      .then((teams) => {
        this.teamsList = Object.keys(teams).map((key) => { return teams[key]});
        this.total = this.teamsList.length;
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
}

@Pipe({  name: 'orderBy' })
export class OrderByPipe implements PipeTransform {

  transform(teamsRecords: Array<any>, args?: any): any {
    return teamsRecords.sort(function(a, b){
      if(a[args.columnFilter] < b[args.columnFilter]){
        return -1 * args.filterDirection;
      }
      else if( a[args.columnFilter] > b[args.columnFilter]){
        return args.filterDirection;
      }
      else{
        return 0;
      }
    });
  };
}
