import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserItemComponent } from './components/user-item/user-item.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserRouterModule } from './user-router.module';
import {SharedModule} from "../shared/shared.module";
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserMainComponent } from './components/user-main/user-main.component';
import { UserUpsertComponent } from './components/user-upsert/user-upsert.component';

@NgModule({
  declarations: [
    UserItemComponent,
    UserListComponent,
    UserMainComponent,
    UserUpsertComponent
  ],
  imports: [
    CommonModule,
    UserRouterModule,
    SharedModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class UserModule { }
