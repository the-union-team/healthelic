import Link from 'next/link';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function NavLink({ href, children, className = '', onClick }: NavLinkProps) {
  return (
    <Link
      href={href}
      className={`font-semibold text-gray-900 hover:bg-gray-100 px-3 py-2 rounded-full transition-all duration-200 ${className}`}
      onClick={onClick}
    >
      {children}
    </Link>
  );
}

