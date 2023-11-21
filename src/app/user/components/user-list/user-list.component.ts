import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/users.model';

@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent implements OnInit, OnDestroy {

  public users: User[] = [];

  constructor(private userService: UserService){}

  ngOnInit(): void {
      this.userService.getUsers().subscribe(response => {
          this.users = response;
      })
  }

  ngOnDestroy(): void {
      throw new Error('Method not implemented.');
  }
}
