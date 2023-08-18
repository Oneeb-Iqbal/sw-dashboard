import { Component } from '@angular/core';
import { appRoutes } from './common/routes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Small World';
  routes = appRoutes;
}
