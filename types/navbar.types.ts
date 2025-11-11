export interface NavSubItem {
  label: string;
  href: string;
  description?: string;
}

export interface NavGroup {
  label: string;
  type: 'group';
  items: NavSubItem[];
}

export interface FeaturedSection {
  title: string;
  description: string;
  cta: {
    label: string;
    href: string;
  };
}

export interface Column {
  label: string;
  items: NavSubItem[];
}

export interface NavItem {
  label: string;
  href?: string;
  type: string;
  items?: (NavSubItem | NavGroup)[];
  featured?: FeaturedSection;
  columns?: Column[];
  variant?: string;
  hiddenOnMobile?: boolean;
}


