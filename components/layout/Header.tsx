'use client';

import { useState, useEffect } from 'react';
import navbarData from '@/constants/navbar.json';
import Button from '@/components/ui/Button';
import NavLink from '@/components/ui/NavLink';
import Logo from '@/components/ui/Logo';
import MobileMenuButton from '@/components/ui/MobileMenuButton';
import Dropdown from './Dropdown';
import MobileDropdown from './MobileDropdown';
import type { NavItem } from '@/types/navbar.types';
import { useRouter } from 'next/navigation';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();

  const handleItemClick = () => {
    setMobileMenuOpen(false);
  };

  // Close mobile menu when clicking outside or on route change
  useEffect(() => {
    const handleRouteChange = () => {
      setMobileMenuOpen(false);
    };

    // Close menu on window resize (if switching to desktop)
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  return (
    <div className="sticky top-0 z-50 pt-4 px-4 sm:px-6 lg:px-8 max-w-[95%] mx-auto" id="navbar-container">
      <header className="max-w-[1500px] mx-auto bg-white rounded-xl md:rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition-shadow duration-300">
        <nav className="px-4 sm:px-6 relative overflow-hidden">
          <div className="flex items-center justify-between h-16 min-w-0">
            <div className="flex items-center gap-4 min-w-0 flex-1">
              <Logo href={navbarData.logo.href} text={navbarData.logo.text} />
              <MobileMenuButton isOpen={mobileMenuOpen} onClick={() => setMobileMenuOpen(!mobileMenuOpen)} />

              <div className="hidden lg:flex items-center min-w-0">
                {(navbarData.navItems as NavItem[]).map((item, idx) => {
                  if (item.type === 'dropdown') {
                    return (
                      <Dropdown
                        key={idx}
                        label={item.label}
                        href={item.href}
                        featured={item.featured}
                        columns={item.columns}
                        items={item.items}
                        onItemClick={() => {}}
                      />
                    );
                  }
                  return (
                    <NavLink key={idx} href={item.href || '#'}>
                      {item.label}
                    </NavLink>
                  );
                })}
              </div>
            </div>

            <div className="hidden md:flex items-center gap-4 ml-auto flex-shrink-0">
              {(navbarData.actions as NavItem[]).map((action, idx) => {
                if (action.type === 'button') {
                  return (
                    <Button
                      key={idx}
                      href={action.href || '#'}
                      variant={action.variant === 'primary' ? 'primary' : 'outline'}
                      hiddenOnMobile={action.hiddenOnMobile}
                    >
                      {action.label}
                    </Button>
                  );
                }
                return (
                  <Button
                    key={idx}
                    href={action.href || '#'}
                    variant="link"
                    hiddenOnMobile={action.hiddenOnMobile}
                  >
                    {action.label}
                  </Button>
                );
              })}
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden border-t border-gray-200 py-4 animate-in slide-in-from-top duration-200 max-h-[calc(100vh-8rem)] overflow-y-auto">
              <div className="flex flex-col gap-3">
                {(navbarData.navItems as NavItem[]).map((item, idx) => {
                  if (item.type === 'dropdown') {
                    return (
                      <MobileDropdown
                        key={idx}
                        label={item.label}
                        featured={item.featured}
                        columns={item.columns}
                        items={item.items}
                        onItemClick={handleItemClick}
                      />
                    );
                  }
                  return (
                    <NavLink 
                      key={idx} 
                      href={item.href || '#'} 
                      onClick={handleItemClick}
                      className="block py-2"
                    >
                      {item.label}
                    </NavLink>
                  );
                })}
                <div className="pt-4 border-t border-gray-200 flex flex-col gap-3 mt-2">
                  {(navbarData.actions as NavItem[]).map((action, idx) => (
                    <Button
                      key={idx}
                      href={action.href || '#'}
                      variant={action.type === 'button' ? (action.variant === 'primary' ? 'primary' : 'outline') : 'link'}
                      onClick={handleItemClick}
                      className={action.type === 'button' ? 'text-center w-full' : 'text-center'}
                    >
                      {action.label}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </nav>
      </header>
    </div>
  );
}
