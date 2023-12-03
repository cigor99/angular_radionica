import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
  UrlTree
} from '@angular/router';
import {inject} from "@angular/core";

export const validIdGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree => {
  const router = inject(Router);

  const param = route.paramMap.get('id');
  const id = parseInt(param ?? '');
  if (isNaN(id) || id < 0) {
    return router.createUrlTree(['/error']);
  }
  return true;
};
