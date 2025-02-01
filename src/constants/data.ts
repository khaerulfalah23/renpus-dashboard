import { NavItem } from '@/types';

export const navItems: NavItem[] = [
  {
    title: 'Dashboard',
    url: '/',
    icon: 'dashboard',
    isActive: false,
    shortcut: ['d', 'd'],
    items: [],
  },
  {
    title: 'User',
    url: '/dashboard/user',
    icon: 'user',
    shortcut: ['e', 'e'],
    isActive: false,
    items: [],
  },
  {
    title: 'Category',
    url: '/category',
    icon: 'category',
    shortcut: ['k', 'k'],
    isActive: false,
    items: [],
  },
  {
    title: 'Book',
    url: '/book',
    icon: 'book',
    shortcut: ['b', 'b'],
    isActive: false,
    items: [],
  },
];
