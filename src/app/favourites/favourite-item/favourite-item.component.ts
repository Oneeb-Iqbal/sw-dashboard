import { Component, Input } from '@angular/core';
import { User } from 'src/app/common/types';

@Component({
  selector: 'app-favourite-item',
  templateUrl: './favourite-item.component.html',
  styleUrls: ['./favourite-item.component.scss']
})
export class FavouriteItemComponent {
  @Input()
  item!: User;
}
