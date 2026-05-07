import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },

  // Public routes
  {
    path: 'auth',
    loadComponent: () =>
      import('./features/auth/login.component').then(m => m.LoginComponent),
  },
  {
    path: '403',
    loadComponent: () =>
      import('./features/auth/forbidden.component').then(m => m.ForbiddenComponent),
  },

  // Protected layout shell
  {
    path: '',
    loadComponent: () =>
      import('./features/layout/main-layout.component').then(m => m.MainLayoutComponent),
    canActivate: [authGuard],
    children: [
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./features/dashboard/dashboard.component').then(m => m.DashboardComponent),
        data: { permission: 'dashboard_view' },
      },
      // ── Purchase ──────────────────────────────────────────────────────
      { path: 'purchase/vendors',    data: { permission: 'purchase_view' },    loadComponent: () => import('./features/purchase/vendors/vendors.component').then(m => m.VendorsComponent) },
      { path: 'purchase/products',   data: { permission: 'purchase_view' },    loadComponent: () => import('./features/purchase/products/products.component').then(m => m.ProductsComponent) },
      { path: 'purchase/orders',     data: { permission: 'purchase_view' },    loadComponent: () => import('./features/purchase/orders/orders.component').then(m => m.OrdersComponent) },
      { path: 'purchase/inspection', data: { permission: 'purchase_view' },    loadComponent: () => import('./features/purchase/inspection/inspection.component').then(m => m.InspectionComponent) },
      { path: 'purchase/returns',    data: { permission: 'purchase_view' },    loadComponent: () => import('./features/purchase/returns/returns.component').then(m => m.ReturnsComponent) },
      // ── Inventory ─────────────────────────────────────────────────────
      { path: 'inventory/inbound',   data: { permission: 'inventory_view' },   loadComponent: () => import('./features/inventory/inbound/inbound.component').then(m => m.InboundComponent) },
      { path: 'inventory/outbound',  data: { permission: 'inventory_view' },   loadComponent: () => import('./features/inventory/outbound/outbound.component').then(m => m.OutboundComponent) },
      { path: 'inventory/status',    data: { permission: 'inventory_view' },   loadComponent: () => import('./features/inventory/status/status.component').then(m => m.StatusComponent) },
      // ── Sales ─────────────────────────────────────────────────────────
      { path: 'sales/orders',        data: { permission: 'sales_view' },       loadComponent: () => import('./features/sales/orders/sales-orders.component').then(m => m.SalesOrdersComponent) },
      { path: 'sales/shipping',      data: { permission: 'sales_view' },       loadComponent: () => import('./features/sales/shipping/shipping.component').then(m => m.ShippingComponent) },
      // ── Admin ─────────────────────────────────────────────────────────
      { path: 'admin/users',         data: { permission: 'admin_all' },        loadComponent: () => import('./features/admin/users/users.component').then(m => m.UsersComponent) },
      { path: 'admin/roles',         data: { permission: 'admin_all' },        loadComponent: () => import('./features/admin/roles/roles.component').then(m => m.RolesComponent) },
    ],
  },

  { path: '**', redirectTo: 'dashboard' },
];
