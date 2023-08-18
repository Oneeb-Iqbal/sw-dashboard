import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule} from '@angular/material/table';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

import { DataTableComponent } from './data-table/data-table.component';
import { CardDisplayComponent } from './card-display/card-display.component';
import { FilterBarComponent } from './filter-bar/filter-bar.component';
import { ResultPanelComponent } from './result-panel/result-panel.component';
import { DashboardComponent } from './dashboard.component';
import { DashboardService } from './dashboard.service';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
];



@NgModule({
  declarations: [
    DashboardComponent,
    DataTableComponent,
    CardDisplayComponent,
    FilterBarComponent,
    ResultPanelComponent,
  ],
  imports: [
    CommonModule,
    MatPaginatorModule,
    MatTableModule,
    MatSelectModule,
    MatFormFieldModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatProgressSpinnerModule,
    RouterModule.forChild(routes),
  ],
  providers: [
    DashboardService
  ],
  exports: [
    DashboardComponent,
    DataTableComponent,
    CardDisplayComponent,
    FilterBarComponent,
    ResultPanelComponent,
    RouterModule,
  ]
})
export class DashboardModule { }
