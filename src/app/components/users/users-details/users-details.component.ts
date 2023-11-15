import { Component } from '@angular/core';

@Component({
  selector: 'users-details',
  templateUrl: './users-details.component.html',
  styleUrl: './users-details.component.scss'
})
export class UsersDetailsComponent {
    public firstName = "Ime"
    public lastName = "Prezime"
    public email = "email@email.com"
}
