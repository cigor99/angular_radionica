import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { UserDTO } from '../../models/user.model';

@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent implements OnInit, OnDestroy {

  public users: UserDTO[] = [];
  public userHeaders: string[] = ["name", "surname", "email", "delete"]

  constructor(private userService: UserService){}

  ngOnInit(): void {
      this.userService.getAll().subscribe(response => {
          this.users = response;
      })
  }

  ngOnDestroy(): void {
      throw new Error('Method not implemented.');
  }
}
