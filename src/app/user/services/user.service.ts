import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BACKEND_URL, ADMIN_ID } from '../../shared/statics/statics';
import { UpsertUserRequestDTO, UserDTO } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpService: HttpClient) { }

  public getAll(): Observable<UserDTO[]> {
    return this.httpService.get<UserDTO[]>(`${BACKEND_URL}/admins/${ADMIN_ID}/users`);
  }

  public getOne(id: number): Observable<UserDTO> {
    return this.httpService.get<UserDTO>(`${BACKEND_URL}/admins/${ADMIN_ID}/users/${id}`);
  }

  public create(user: UpsertUserRequestDTO): Observable<number> {
    return this.httpService.post<number>(`${BACKEND_URL}/admins/${ADMIN_ID}/users`, user);
  }

  public patch(id: number, user: UpsertUserRequestDTO): Observable<UserDTO> {
    return this.httpService.patch<UserDTO>(`${BACKEND_URL}/admins/${ADMIN_ID}/users/${id}`, user);
  }

  public delete(id: number): Observable<void> {
    return this.httpService.delete<void>(`${BACKEND_URL}/admins/${ADMIN_ID}/users/${id}`);
  }
}
