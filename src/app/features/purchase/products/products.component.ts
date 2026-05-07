import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [MatIconModule],
  template: `
    <div class="placeholder-page">
      <mat-icon class="ph-icon">inventory_2</mat-icon>
      <h2>產品管理</h2>
      <p>此模組開發中，敬請期待。</p>
    </div>`,
  styles: [`.placeholder-page{display:flex;flex-direction:column;align-items:center;justify-content:center;min-height:60vh;gap:12px;color:#888;}
  .ph-icon{font-size:64px;width:64px;height:64px;color:#c5c5c5;} h2{margin:0;color:#555;} p{margin:0;}`]
})
export class ProductsComponent {}
