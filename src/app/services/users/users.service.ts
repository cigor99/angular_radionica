import { Injectable } from '@angular/core';
import { User } from '../../models/users.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ADMIN_ID, BACKEND_URL } from '../../statics/statics';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpService: HttpClient) { }

  public getUsers(): Observable<User[]>{
    return this.httpService.get<User[]>(`${BACKEND_URL}/admins/${ADMIN_ID}/users`);
  }
}
