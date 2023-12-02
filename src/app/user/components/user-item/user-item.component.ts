import {Component, Input, OnDestroy} from '@angular/core';
import { UserDTO } from '../../models/user.model';
import { UserService } from '../../services/user.service';
import {Subscription} from "rxjs";

@Component({
  selector: 'ar-user-item',
  templateUrl: './user-item.component.html',
  styleUrl: './user-item.component.scss'
})
export class UserItemComponent implements OnDestroy {
  @Input() user: UserDTO = {name: '', surname: '', email: '', id: 0};
  private subscriptions: Subscription[] = [];

  constructor(private userService: UserService) {}

  receiveMessage(){
    this.subscriptions.push(this.userService.delete(this.user.id).subscribe(_ => {
        window.location.reload();
    }))
  }

  ngOnDestroy() {
      this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }
}
