'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function NavLink({ href, children, className = '', onClick }: NavLinkProps) {
  const router = useRouter();

  const handleClick = (e: React.MouseEvent) => {
    if (onClick) {
      onClick();
    }
    
    // Handle hash links
    if (href.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <Link
      href={href}
      className={`font-semibold text-gray-900 hover:bg-gray-100 px-3 py-2 rounded-full transition-all duration-200 ${className}`}
      onClick={handleClick}
    >
      {children}
    </Link>
  );
}
