import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {UpsertUserRequestDTO} from '../../models/user.model';
import {UserService} from '../../services/user.service';
import {Router} from '@angular/router';
import {Location} from '@angular/common';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'ar-user-create',
  templateUrl: './user-create.component.html',
  styleUrl: './user-create.component.scss'
})
export class UserCreateComponent implements OnInit {
  public userForm;
  private userId: number = 0;

  constructor(private formBuilder: FormBuilder,
              private userService: UserService,
              private router: Router,
              private location: Location,
              private route: ActivatedRoute) {
    this.userForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      surname: ['', [Validators.required]],
      email: ['', [Validators.required]]
    })
  }

  public onSubmit() {
    const {name, surname, email} = this.userForm.getRawValue();
    if (name && surname && email) {
      const user: UpsertUserRequestDTO = {name, surname, email}

      if (this.userId != 0) {
        this.userService.patch(this.userId, user).subscribe(_ => {
          this.router.navigate(['/']);
        })
        return;
      }

      this.userService.create(user).subscribe(_ => {
        this.router.navigate(['/']);
      })
    }
  }

  public backButtonClick() {
    this.location.back();
  }

  public ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const {name, surname, email, id} = params;

      if (name && surname && email) {
        this.userForm.patchValue({name, surname, email}, {emitEvent: false});
        this.userId = id;
      }
    })
  }
}
