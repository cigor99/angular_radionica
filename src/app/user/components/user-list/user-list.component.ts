import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { UserDTO } from '../../models/user.model';
import {Subscription} from "rxjs";

@Component({
  selector: 'ar-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent implements OnInit, OnDestroy {

  public users: UserDTO[] = [];
  public userHeaders: string[] = ['Name', 'Surname', 'Email', 'Action'];

  private subscriptions: Subscription[] = [];

  constructor(private userService: UserService){}

  ngOnInit(): void {
      this.subscriptions.push(this.userService.getAll().subscribe(response => {
          this.users = response;
      }));
  }

  ngOnDestroy(): void {
      this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }
}
