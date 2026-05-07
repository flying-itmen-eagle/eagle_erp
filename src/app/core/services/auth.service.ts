import { Injectable, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { LocalDataService } from './local-data.service';
import { User, MOCK_CREDENTIALS } from '../models/user.model';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private localDataService = inject(LocalDataService);
  private router = inject(Router);

  currentUser = signal<User | null>(null);

  constructor() {
    const stored = this.localDataService.getData<User>('currentUser');
    if (stored) this.currentUser.set(stored);
  }

  login(username: string, password: string): boolean {
    const cred = MOCK_CREDENTIALS.find(
      c => c.username === username && c.password === password
    );
    if (cred) {
      this.currentUser.set(cred.user);
      this.localDataService.setData('currentUser', cred.user);
      return true;
    }
    return false;
  }

  logout(): void {
    this.currentUser.set(null);
    localStorage.removeItem('currentUser');
    this.router.navigate(['/auth']);
  }

  hasPermission(permission: string): boolean {
    return this.currentUser()?.permissions.includes(permission) ?? false;
  }
}
