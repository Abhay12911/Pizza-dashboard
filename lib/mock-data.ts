export interface PizzaOrder {
  id: string;
  customerName: string;
  pizzaType: string;
  quantity: number;
  orderDate: string;
  status: 'Pending' | 'Preparing' | 'Out for Delivery' | 'Delivered' | 'Cancelled';
}

export const pizzaTypes = [
  'Margherita',
  'Pepperoni',
  'Veggie Supreme',
  'BBQ Chicken',
  'Hawaiian',
  'Meat Lovers',
  'Buffalo Chicken',
  'Mushroom & Truffle',
  'Four Cheese',
  'Supreme'
];

export const mockPizzaOrders: PizzaOrder[] = [
  {
    id: 'PZA001',
    customerName: 'John Doe',
    pizzaType: 'Margherita',
    quantity: 2,
    orderDate: '2025-06-01 14:30',
    status: 'Delivered'
  },
  {
    id: 'PZA002',
    customerName: 'Jane Smith',
    pizzaType: 'Pepperoni',
    quantity: 1,
    orderDate: '2025-06-01 15:45',
    status: 'Out for Delivery'
  },
  {
    id: 'PZA003',
    customerName: 'Michael Johnson',
    pizzaType: 'Veggie Supreme',
    quantity: 3,
    orderDate: '2025-06-01 16:20',
    status: 'Preparing'
  },
  {
    id: 'PZA004',
    customerName: 'Emily Davis',
    pizzaType: 'BBQ Chicken',
    quantity: 2,
    orderDate: '2025-06-01 17:10',
    status: 'Pending'
  },
  {
    id: 'PZA005',
    customerName: 'Robert Wilson',
    pizzaType: 'Hawaiian',
    quantity: 1,
    orderDate: '2025-06-01 18:05',
    status: 'Cancelled'
  },
  {
    id: 'PZA006',
    customerName: 'Olivia Martinez',
    pizzaType: 'Meat Lovers',
    quantity: 2,
    orderDate: '2025-06-02 12:15',
    status: 'Delivered'
  },
  {
    id: 'PZA007',
    customerName: 'William Anderson',
    pizzaType: 'Buffalo Chicken',
    quantity: 3,
    orderDate: '2025-06-02 13:30',
    status: 'Preparing'
  },
  {
    id: 'PZA008',
    customerName: 'Sophia Thomas',
    pizzaType: 'Mushroom & Truffle',
    quantity: 1,
    orderDate: '2025-06-02 14:45',
    status: 'Pending'
  },
  {
    id: 'PZA009',
    customerName: 'James Jackson',
    pizzaType: 'Four Cheese',
    quantity: 2,
    orderDate: '2025-06-02 15:20',
    status: 'Out for Delivery'
  },
  {
    id: 'PZA010',
    customerName: 'Isabella White',
    pizzaType: 'Supreme',
    quantity: 4,
    orderDate: '2025-06-02 16:10',
    status: 'Delivered'
  },
  {
    id: 'PZA011',
    customerName: 'David Harris',
    pizzaType: 'Margherita',
    quantity: 1,
    orderDate: '2025-06-02 17:05',
    status: 'Cancelled'
  },
  {
    id: 'PZA012',
    customerName: 'Emma Garcia',
    pizzaType: 'Pepperoni',
    quantity: 2,
    orderDate: '2025-06-03 11:30',
    status: 'Pending'
  },
  {
    id: 'PZA013',
    customerName: 'Alexander Rodriguez',
    pizzaType: 'Veggie Supreme',
    quantity: 3,
    orderDate: '2025-06-03 12:15',
    status: 'Preparing'
  },
  {
    id: 'PZA014',
    customerName: 'Mia Lee',
    pizzaType: 'BBQ Chicken',
    quantity: 1,
    orderDate: '2025-06-03 13:40',
    status: 'Out for Delivery'
  },
  {
    id: 'PZA015',
    customerName: 'Daniel Allen',
    pizzaType: 'Hawaiian',
    quantity: 2,
    orderDate: '2025-06-03 14:25',
    status: 'Delivered'
  }
];