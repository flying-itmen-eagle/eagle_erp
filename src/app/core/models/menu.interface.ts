export interface MenuItem {
  title: string;
  icon: string;
  route: string;
  permission: string;
}

export const MENU_ITEMS: MenuItem[] = [
  // 儀表板
  { title: '儀表板',   icon: 'dashboard',           route: '/dashboard',         permission: 'dashboard_view' },
  // 進貨管理
  { title: '廠商管理', icon: 'business',             route: '/purchase/vendors',    permission: 'purchase_view' },
  { title: '產品管理', icon: 'category',             route: '/purchase/products',   permission: 'purchase_view' },
  { title: '進貨總單', icon: 'receipt_long',         route: '/purchase/orders',     permission: 'purchase_view' },
  { title: '進貨檢驗', icon: 'fact_check',           route: '/purchase/inspection', permission: 'purchase_view' },
  { title: '退貨管理', icon: 'assignment_return',    route: '/purchase/returns',    permission: 'purchase_view' },
  // 庫存管理
  { title: '入庫作業', icon: 'move_to_inbox',        route: '/inventory/inbound',   permission: 'inventory_view' },
  { title: '出庫作業', icon: 'outbox',               route: '/inventory/outbound',  permission: 'inventory_view' },
  { title: '庫存現況', icon: 'inventory_2',          route: '/inventory/status',    permission: 'inventory_view' },
  // 銷售管理
  { title: '銷售管理', icon: 'point_of_sale',        route: '/sales/orders',        permission: 'sales_view' },
  { title: '出貨管理', icon: 'local_shipping',       route: '/sales/shipping',      permission: 'sales_view' },
  // 系統管理
  { title: '人員管理', icon: 'manage_accounts',      route: '/admin/users',         permission: 'admin_all' },
  { title: '權限管理', icon: 'admin_panel_settings', route: '/admin/roles',         permission: 'admin_all' },
];
