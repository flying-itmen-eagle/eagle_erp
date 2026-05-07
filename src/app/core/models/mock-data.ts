export interface ProductSKU {
  id: string;
  name: string;
  spec: string;
  category: string;
  stock_qty: number;
  price: number;
}

export interface UserPermission {
  role: string;
  permissions: string[];
}

export const INITIAL_SKU_DATA: ProductSKU[] = [
  {
    id: 'SKU-001',
    name: '高強度螺絲',
    spec: 'M8 x 50mm',
    category: '五金零件',
    stock_qty: 150,
    price: 15
  },
  {
    id: 'SKU-002',
    name: '不鏽鋼墊片',
    spec: 'M8',
    category: '五金零件',
    stock_qty: 500,
    price: 2
  }
];

export const INITIAL_PERMISSIONS: UserPermission[] = [
  {
    role: 'Admin',
    permissions: ['purchase_view', 'purchase_edit', 'inventory_all', 'admin_all', 'sales_view', 'dashboard_view']
  },
  {
    role: 'PurchaseManager',
    permissions: ['purchase_view', 'purchase_edit', 'inventory_view', 'dashboard_view']
  }
];
