import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersListComponent } from './components/users/users-list/users-list.component';
import { UsersCreateComponent } from './components/users/users-create/users-create.component';
import { UsersDetailsComponent } from './components/users/users-details/users-details.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersListComponent,
    UsersCreateComponent,
    UsersDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
