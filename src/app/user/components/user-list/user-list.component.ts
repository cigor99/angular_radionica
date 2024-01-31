import {Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import {UserService} from '../../services/user.service';
import {UserDTO} from '../../models/user.model';
import {Subscription, take} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'ar-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent implements OnInit, OnDestroy, OnChanges {
  @Input() public searchTerm: string = '';

  public users: UserDTO[] = [];
  public userHeaders: string[] = ['Name', 'Surname', 'Email', 'Action'];

  private subscriptions: Subscription[] = [];

  constructor(private userService: UserService, private router: Router) {
  }

  public userRowClick(id: number) {
    this.router.navigate(['/upsert', id]);
  }

  public ngOnInit(): void {
    this.subscriptions.push(this.userService.getAll().pipe(take(1)).subscribe(response => {
      this.users = response;
    }));
  }

  public ngOnChanges(changes: SimpleChanges): void {
    this.users = this.users.filter(user => user.name.toLowerCase().includes(this.searchTerm.toLowerCase()));
  }

  public ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

}
