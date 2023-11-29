import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserItemComponent } from './components/user-item/user-item.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserRouterModule } from './user-router';
import {SharedModule} from "../shared/shared.module";
import { UserCreateComponent } from './components/user-create/user-create.component';

@NgModule({
  declarations: [
    UserItemComponent,
    UserListComponent,
    UserCreateComponent
  ],
  imports: [
    CommonModule,
    UserRouterModule,
    SharedModule
  ]
})
export class UserModule { }
