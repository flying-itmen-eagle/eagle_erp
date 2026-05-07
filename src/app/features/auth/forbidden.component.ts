import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-forbidden',
  standalone: true,
  imports: [MatButtonModule, MatIconModule],
  template: `
    <div class="forbidden-container">
      <div class="forbidden-card">
        <div class="error-code">403</div>
        <mat-icon class="lock-icon">lock</mat-icon>
        <h2>存取遭到拒絕</h2>
        <p>您的帳號權限不足，無法存取此頁面。<br>請聯絡系統管理員調整您的角色設定。</p>
        <button mat-raised-button class="back-btn" (click)="goBack()">
          <mat-icon>arrow_back</mat-icon>
          返回儀表板
        </button>
      </div>
    </div>
  `,
  styles: [`
    .forbidden-container {
      min-height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #f5f7fb;
      padding: 32px;
    }
    .forbidden-card {
      text-align: center;
      background: #fff;
      border-radius: 20px;
      padding: 56px 48px;
      box-shadow: 0 8px 32px rgba(0,0,0,0.08);
      max-width: 440px;
    }
    .error-code {
      font-size: 96px;
      font-weight: 900;
      background: linear-gradient(135deg, #e74c3c, #c0392b);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      line-height: 1;
      margin-bottom: 8px;
    }
    .lock-icon { font-size: 48px; width: 48px; height: 48px; color: #e74c3c; margin-bottom: 16px; }
    h2 { margin: 0 0 12px; color: #1e2a3a; font-size: 22px; }
    p  { margin: 0 0 32px; color: #888; line-height: 1.7; }
    .back-btn {
      background: linear-gradient(135deg, #6C63FF, #3ECFCF) !important;
      color: #fff !important;
      border-radius: 10px !important;
      padding: 0 24px !important;
      height: 48px;
      font-weight: 600;
      display: inline-flex;
      align-items: center;
      gap: 8px;
    }
  `]
})
export class ForbiddenComponent {
  private router = inject(Router);
  goBack() { this.router.navigate(['/dashboard']); }
}
