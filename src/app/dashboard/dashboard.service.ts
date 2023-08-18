import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private baseUrl = 'https://reqres.in/api'; // ReqRes API base URL

  constructor(private http: HttpClient) { }

  getUsers(page: number, perPage: number): Observable<any> {
    const url = `${this.baseUrl}/users`;
    const params = new HttpParams()
      .set('page', page.toString())
      .set('per_page', perPage.toString());
    return this.http.get(url, { params });
  }
}
