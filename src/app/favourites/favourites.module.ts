import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';
import { FavouritesComponent } from './favourites.component';
import { FavouriteItemComponent } from './favourite-item/favourite-item.component';

import {MatCardModule} from '@angular/material/card';

const routes: Routes = [
  {
    path: '',
    component: FavouritesComponent,
  },
];

@NgModule({
  declarations: [
    FavouritesComponent,
    FavouriteItemComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MatCardModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    FavouritesComponent,
    RouterModule,
  ]
})
export class FavouritesModule { }
