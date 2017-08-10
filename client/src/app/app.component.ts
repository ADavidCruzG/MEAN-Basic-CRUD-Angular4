import { Component } from '@angular/core';
import { ToasterConfig} from 'angular2-toaster';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public toasterConfig: ToasterConfig = new ToasterConfig({
    animation: 'fade',
    limit: 5,
    showCloseButton: true,
    timeout: 4000
  });
}
