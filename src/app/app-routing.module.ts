import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ErrorPageComponent} from "./components/error-page/error-page.component";

const routes: Routes = [
  {path: '', loadChildren: () => import('./user/user.module').then(module => module.UserModule)},
  {path: 'error', component: ErrorPageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
