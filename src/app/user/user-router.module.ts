import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { Routes } from "@angular/router";
import { UserListComponent } from "./components/user-list/user-list.component";

export const routes: Routes = [{path: '', component: UserListComponent}]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class UserRouterModule { }