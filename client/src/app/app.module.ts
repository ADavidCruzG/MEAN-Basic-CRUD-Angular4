import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ToasterModule} from 'angular2-toaster';
import { RouterModule} from '@angular/router';
import { TeamsModule} from './teams/teams.module';

import { AppComponent } from './app.component';

import { TeamsService} from './teams/teams.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ToasterModule,
    RouterModule,
    TeamsModule
  ],
  providers: [TeamsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
