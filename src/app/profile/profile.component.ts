import { Component } from '@angular/core';
import { User } from '../common/types';
import { ProfileService } from './profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  userData: User = {
    id: 0,
    email: 'ioneeb97@gmail.com',
    first_name: 'Oneeb',
    last_name: 'Iqbal',
    avatar: '/assets/IMG_8665.jpg'
  }
  
  constructor(private profileService: ProfileService) {

  }

  ngOnInit() {
    this.profileService.getUser(2).subscribe((res) => {
      this.userData = res.data;
      debugger;
    })
  }
}
