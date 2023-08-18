import { Component, ViewChild } from '@angular/core';

import { DashboardService } from './dashboard.service';
import { User } from '../common/types';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  userList: Array<User> = [];

  constructor(private dashboardService: DashboardService) {

  }

  ngOnInit () {
    this.loadData();
  }

  loadData() {
    this.dashboardService.getUsers(1, 15).subscribe((response) => {
      this.userList = response.data;
    });
  }
}

