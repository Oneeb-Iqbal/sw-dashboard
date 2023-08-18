import { Component, Input, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { displayedColumns } from 'src/app/common/config';
import { User } from 'src/app/common/types';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent {
  displayedColumns: string[] = displayedColumns;
  dataSource = new MatTableDataSource<User>([]);

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  @Input() data: Array<User> = [];

  ngOnChanges() {
    this.dataSource = new MatTableDataSource(this.data);
    this.dataSource.paginator = this.paginator;
  }
}
