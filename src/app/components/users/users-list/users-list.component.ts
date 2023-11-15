import { Component, OnDestroy, OnInit } from '@angular/core';
import { User } from '../../../models/users.model';
import { UsersService } from '../../../services/users/users.service';

@Component({
  selector: 'users-list',
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss'
})
export class UsersListComponent implements OnInit, OnDestroy {

    public users: User[] = [];

    constructor(private userService: UsersService){}

    ngOnInit(): void {
        this.userService.getUsers().subscribe(response => {
            this.users = response;
        })
    }

    ngOnDestroy(): void {
        throw new Error('Method not implemented.');
    }
}
