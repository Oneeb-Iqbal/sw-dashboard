import { Component } from '@angular/core';
import { FavouritesService } from './favourites.service';
import { User } from '../common/types';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.scss']
})
export class FavouritesComponent {
  data: Array<User> = [];
  constructor(private favouritesService: FavouritesService) {}

  ngOnInit () {
    this.loadData();
  }

  loadData() {
    this.favouritesService.getFavouriteUsers(1, 10).subscribe((response) => {
      this.data = response.data;
    });
  }
}
