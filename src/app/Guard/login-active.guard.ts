import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { TokenService } from '../services/token.service';

export const loginActiveGuard: CanActivateFn = (route, state) => {
  let tokenService = inject(TokenService);
  let router = inject(Router);

  let token = tokenService.getToken();
  if (!tokenService.isTokenExpired(token))
    return true;
  
  alert('Inicie sesión');
  router.navigate(['/login']);
  return false;
};
