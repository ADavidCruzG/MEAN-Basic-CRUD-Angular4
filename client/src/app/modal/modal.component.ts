import {Component, Input, OnInit} from '@angular/core';
import {TeamsService} from '../teams/teams.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Input() modalTitle: string = 'Título default';
  @Input() modalBody: string = 'Body default';
  @Input() confirmBtn: Function;

  constructor(private teamsService: TeamsService) { }

  ngOnInit() {
  }

}
