import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = (route) => {
  const auth   = inject(AuthService);
  const router = inject(Router);

  const user = auth.currentUser();

  // 未登入 → 登入頁
  if (!user) {
    return router.parseUrl('/auth');
  }

  // 路由有設定 permission 要求時進行二次驗證
  const required: string | undefined = route.data['permission'];
  if (required) {
    const hasWildcard = user.permissions.includes('*');
    const hasPerm     = user.permissions.includes(required);
    if (!hasWildcard && !hasPerm) {
      return router.parseUrl('/403');
    }
  }

  return true;
};
