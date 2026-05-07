export interface User {
  id: string;
  username: string;
  displayName: string;
  role: string;
  permissions: string[];
}

export interface MockCredential {
  username: string;
  password: string;
  user: User;
}

export const MOCK_CREDENTIALS: MockCredential[] = [
  {
    username: 'admin',
    password: 'admin123',
    user: {
      id: 'user-001',
      username: 'admin',
      displayName: '系統管理員',
      role: 'Admin',
      permissions: [
        'dashboard_view', 'purchase_view', 'purchase_edit',
        'inventory_view', 'inventory_all', 'sales_view', 'admin_all'
      ]
    }
  },
  {
    username: 'warehouse',
    password: 'wh123',
    user: {
      id: 'user-002',
      username: 'warehouse',
      displayName: '倉庫管理員',
      role: 'Warehouse',
      permissions: ['dashboard_view', 'purchase_view', 'inventory_view', 'inventory_all']
    }
  },
  {
    username: 'sales',
    password: 'sales123',
    user: {
      id: 'user-003',
      username: 'sales',
      displayName: '業務人員',
      role: 'Sales',
      permissions: ['dashboard_view', 'sales_view']
    }
  }
];
