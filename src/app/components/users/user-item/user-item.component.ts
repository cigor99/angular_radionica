import { Component, Input } from '@angular/core';
import { User } from '../../../models/users.model';

@Component({
  selector: 'user-item',
  templateUrl: './user-item.component.html',
  styleUrl: './user-item.component.scss'
})
export class UserItemComponent {

    @Input() user: User | undefined;
}
