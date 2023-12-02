import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { Routes } from "@angular/router";
import {UserMainComponent} from "./components/user-main/user-main.component";
import {UserCreateComponent} from "./components/user-create/user-create.component";

export const routes: Routes = [
    { path: '', component: UserMainComponent },
    { path: 'create', component: UserCreateComponent }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class UserRouterModule { }
