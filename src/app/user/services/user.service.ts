import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BACKEND_URL, ADMIN_ID } from '../../shared/statics/statics';
import { UserDTO } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpService: HttpClient) { }

  public getAll(): Observable<UserDTO[]> {
    return this.httpService.get<UserDTO[]>(`${BACKEND_URL}/admins/${ADMIN_ID}/users`);
  }

  public create(user: UserDTO): Observable<number> {
    return this.httpService.post<number>(`${BACKEND_URL}/admins/${ADMIN_ID}/users`, user);
  }

  public delete(id: number): Observable<void> {
    return this.httpService.delete<void>(`${BACKEND_URL}/admins/${ADMIN_ID}/users/${id}`);
  }
}
