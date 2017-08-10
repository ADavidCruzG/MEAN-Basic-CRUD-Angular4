import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';

import { TeamsService} from './teams.service';

import { HomeComponent } from '../home/home.component';
import { TeamsCreateComponent } from './teams-create/teams-create.component';
import { TeamsUpdateComponent } from './teams-update/teams-update.component';
import { TeamsListComponent } from './teams-list/teams-list.component';

const appRoutes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'teams/create', component: TeamsCreateComponent},
  {path: 'teams/list', component: TeamsListComponent}
];

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    HomeComponent,
    TeamsCreateComponent,
    TeamsUpdateComponent,
    TeamsListComponent
  ],
  providers: [
    TeamsService,
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  exports: [
    HomeComponent,
    TeamsCreateComponent,
    TeamsUpdateComponent,
    TeamsListComponent
  ]
})
export class TeamsModule { }
