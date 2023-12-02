import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {UserService} from "../../services/user.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Location} from "@angular/common";
import {UpsertUserRequestDTO, UserDTO} from "../../models/user.model";
import {Subscription} from "rxjs";

@Component({
  selector: 'ar-user-upsert',
  templateUrl: './user-upsert.component.html',
  styleUrl: './user-upsert.component.scss'
})
export class UserUpsertComponent implements OnInit, OnDestroy {
  public userForm;
  private userId: number = 0;
  private subscriptions: Subscription[] = [];

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
        this.subscriptions.push(this.userService.patch(this.userId, user).subscribe(_ => {
          this.router.navigate(['/']);
        }))
        return;
      }

      this.subscriptions.push(this.userService.create(user).subscribe(_ => {
        this.router.navigate(['/']);
      }));
    }
  }

  public backButtonClick() {
    this.location.back();
  }

  public ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    const parsedId = parseInt(id ?? '');

    if (!isNaN(parsedId)) {
      this.userId = parsedId;
      this.subscriptions.push(this.userService.getOne(this.userId).subscribe((result: UserDTO) => {
        if (result) {
          const {email, name, surname} = result;
          this.userForm.patchValue({email, name, surname}, {emitEvent: false});
        }
      }));
    }
  }

  public ngOnDestroy() {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }
}
