import Link from 'next/link';

interface ButtonProps {
  href: string;
  variant?: 'primary' | 'outline' | 'link';
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  hiddenOnMobile?: boolean;
}

export default function Button({
  href,
  variant = 'primary',
  children,
  className = '',
  onClick,
  hiddenOnMobile = false,
}: ButtonProps) {
  const baseStyles = variant === 'link' 
    ? 'font-semibold transition-all duration-300' 
    : 'px-3 py-2 rounded-full font-semibold transition-all duration-300';
  
  const variantStyles = {
    primary: 'bg-black text-white hover:bg-gray-800 shadow-sm hover:shadow-lg hover:shadow-black/20 hover:scale-105 active:scale-100',
    outline: 'border border-black text-gray-900 hover:bg-gray-50 hover:border-gray-800 hover:scale-105 active:scale-100',
    link: 'text-gray-900 hover:text-gray-600 hover:scale-105 active:scale-100',
  };

  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${hiddenOnMobile ? 'hidden sm:block' : ''} ${className}`;

  return (
    <Link href={href} className={combinedClassName} onClick={onClick}>
      {children}
    </Link>
  );
}

