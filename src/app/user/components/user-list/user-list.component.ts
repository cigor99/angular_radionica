import {Component, OnDestroy, OnInit} from '@angular/core';
import {UserService} from '../../services/user.service';
import {UserDTO} from '../../models/user.model';
import {Subscription} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'ar-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent implements OnInit, OnDestroy {

  public users: UserDTO[] = [];
  public userHeaders: string[] = ['Name', 'Surname', 'Email', 'Action'];

  private subscriptions: Subscription[] = [];

  constructor(private userService: UserService, private router: Router) {
  }

  public userRowClick(user: UserDTO) {
    this.router.navigate(['/create'], {
      queryParams: {
        name: user.name,
        surname: user.surname,
        email: user.email,
        id: user.id
      }
    })
  }

  public ngOnInit(): void {
    this.subscriptions.push(this.userService.getAll().subscribe(response => {
      this.users = response;
    }));
  }

  public ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }
}
