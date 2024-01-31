import {Component} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'ar-user-main',
  templateUrl: './user-main.component.html',
  styleUrl: './user-main.component.scss'
})
export class UserMainComponent {
  public searchTerm: string = '';

  constructor(private router: Router) {
  }

  public onSearchChange(event: any) {
    this.searchTerm = event.target.value;  
  }

  public createBtnClick() {
    this.router.navigate(['/upsert', 0]);
  }
}
