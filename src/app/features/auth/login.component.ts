import { Component, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDividerModule } from '@angular/material/divider';
import { AuthService } from '../../core/services/auth.service';
import { MOCK_CREDENTIALS } from '../../core/models/user.model';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatCardModule, MatFormFieldModule, MatInputModule,
    MatButtonModule, MatSelectModule, MatIconModule,
    MatProgressSpinnerModule, MatDividerModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  private auth = inject(AuthService);
  private router = inject(Router);
  private fb = inject(FormBuilder);

  loginForm = this.fb.group({
    role:     ['admin'],
    username: ['admin',    [Validators.required]],
    password: ['admin123', [Validators.required]],
  });

  isLoading    = signal(false);
  errorMessage = signal('');
  hidePassword = signal(true);

  mockUsers = MOCK_CREDENTIALS.map(c => ({
    label: `${c.user.displayName}（${c.user.role}）`,
    username: c.username,
    password: c.password,
  }));

  onRoleChange(username: string) {
    const cred = MOCK_CREDENTIALS.find(c => c.username === username);
    if (cred) this.loginForm.patchValue({ username: cred.username, password: cred.password });
  }

  onLogin() {
    if (this.loginForm.invalid) return;
    this.isLoading.set(true);
    this.errorMessage.set('');
    setTimeout(() => {
      const { username, password } = this.loginForm.value;
      if (this.auth.login(username!, password!)) {
        this.router.navigate(['/dashboard']);
      } else {
        this.errorMessage.set('帳號或密碼錯誤，請重試');
        this.isLoading.set(false);
      }
    }, 800);
  }
}
