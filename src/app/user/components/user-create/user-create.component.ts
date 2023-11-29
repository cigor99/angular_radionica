import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CreateUserRequest } from '../../models/user.model';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'user-create',
  templateUrl: './user-create.component.html',
  styleUrl: './user-create.component.scss'
})
export class UserCreateComponent {
  public userForm;
  
  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router){
    this.userForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      surname: ['', [Validators.required]],
      email: ['', [Validators.required]]
    })
  }

  public onSubmit(){
    const {name, surname, email} = this.userForm.getRawValue();
    if (name && surname && email){
      const user: CreateUserRequest = {name, surname, email}
      
      this.userService.create(user).subscribe(_ => {
        // this.router.navigate(['/']);
        window.location.href = 'http://localhost:4200/';
      })
    }

  }
}
