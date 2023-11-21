import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserItemComponent } from './components/user-item/user-item.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserRouterModule } from './user-router.module';

@NgModule({
  declarations: [
    UserItemComponent,
    UserListComponent
  ],
  imports: [
    CommonModule,
    UserRouterModule
  ]
})
export class UserModule { }
