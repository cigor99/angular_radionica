import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BACKEND_URL, ADMIN_ID } from '../../shared/statics/statics';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpService: HttpClient) { }

  public getUsers(): Observable<User[]>{
    return this.httpService.get<User[]>(`${BACKEND_URL}/admins/${ADMIN_ID}/users`);
  }
}
