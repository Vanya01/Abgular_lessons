import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import {User} from '../models/User';

@Injectable({
  providedIn: 'root'
})


export class ServiceService {
  private url = `https://jsonplaceholder.typicode.com/users`;


  constructor(private httpClient: HttpClient) {
  }


  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.url);

  }

  getUser(id: number): Observable<User> {
    return this.httpClient.get<User>(this.url + '/' + id);
  }

}
