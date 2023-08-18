import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient) { }

  getUser(user: number): Observable<any> {
    const url = `${environment.apiBaseUrl}/users/${user}`;
    return this.http.get(url);
  }
}
