import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'ar-user-main',
  templateUrl: './user-main.component.html',
  styleUrl: './user-main.component.scss'
})
export class UserMainComponent {

    constructor(private router: Router) {
    }

    public createBtnClick(){
        this.router.navigate(['create']);
    }
}
