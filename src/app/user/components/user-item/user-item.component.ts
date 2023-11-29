import { Component, Input } from '@angular/core';
import { UserDTO } from '../../models/user.model';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'user-item',
  templateUrl: './user-item.component.html',
  styleUrl: './user-item.component.scss'
})
export class UserItemComponent {
  @Input() user: UserDTO = {name: '', surname: '', email: '', id: 0};

  constructor(public userService: UserService, public router: Router) {}

  receiveMessage(){
    this.userService.delete(this.user.id).subscribe(_ => {
      this.router.navigate(['/']);
    })
  }
}
