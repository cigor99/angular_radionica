import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { Routes } from "@angular/router";
import {UserMainComponent} from "./components/user-main/user-main.component";
import {UserUpsertComponent} from "./components/user-upsert/user-upsert.component";
import {validIdGuard} from "../shared/guards/valid-id.guard";

export const routes: Routes = [
    { path: '', component: UserMainComponent },
    { path: 'upsert/:id', component: UserUpsertComponent, canActivate: [validIdGuard] }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class UserRouterModule { }
