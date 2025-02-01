import { Icons } from '@/components/icons';

export interface NavItem {
  title: string;
  url: string;
  disabled?: boolean;
  external?: boolean;
  shortcut?: [string, string];
  icon?: keyof typeof Icons;
  label?: string;
  description?: string;
  isActive?: boolean;
  items?: NavItem[];
}

export interface NavItemWithChildren extends NavItem {
  items: NavItemWithChildren[];
}

export interface NavItemWithOptionalChildren extends NavItem {
  items?: NavItemWithChildren[];
}

export interface FooterItem {
  title: string;
  items: {
    title: string;
    href: string;
    external?: boolean;
  }[];
}

export type MainNavItem = NavItemWithOptionalChildren;

export type SidebarNavItem = NavItemWithChildren;

export default interface BaseResponse {
  success: boolean;
  data: any;
  message: string;
}

export type categoryItem = {
  id: string;
  category: string;
};

export type bookItem = {
  id: string;
  author: string;
  booked: number | null;
  bookingId: string | null;
  borrowId: string | null;
  borrowed: number | null;
  categoryId: string;
  description: string;
  image: string;
  isbn: string;
  publicationYear: Date;
  publisher: string;
  stock: number;
  title: string;
  Category: categoryItem;
};
