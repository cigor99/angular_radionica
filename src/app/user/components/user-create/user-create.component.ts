import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CreateUserRequestDTO } from '../../models/user.model';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'ar-user-create',
  templateUrl: './user-create.component.html',
  styleUrl: './user-create.component.scss'
})
export class UserCreateComponent {
  public userForm;

  constructor(private formBuilder: FormBuilder,
              private userService: UserService,
              private router: Router,
              private location: Location){
    this.userForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      surname: ['', [Validators.required]],
      email: ['', [Validators.required]]
    })
  }

  public onSubmit(){
    const {name, surname, email} = this.userForm.getRawValue();
    if (name && surname && email){
      const user: CreateUserRequestDTO = {name, surname, email}

      this.userService.create(user).subscribe(_ => {
        this.router.navigate(['/']);
      })
    }
  }

  public backButtonClick(){
      this.location.back();
  }

}
