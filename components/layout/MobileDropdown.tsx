'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import type { NavSubItem, NavGroup, FeaturedSection, Column } from '@/types/navbar.types';

interface MobileDropdownProps {
  label: string;
  featured?: FeaturedSection;
  columns?: Column[];
  items?: (NavSubItem | NavGroup)[];
  onItemClick?: () => void;
}

export default function MobileDropdown({
  label,
  featured,
  columns,
  items,
  onItemClick,
}: MobileDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const handleLinkClick = (href: string, e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
    }
    
    if (onItemClick) {
      onItemClick();
    }
    setIsOpen(false);
    
    // Handle links with hash (e.g., /features#section)
    if (href.includes('#')) {
      const [path, hash] = href.split('#');
      if (path && hash) {
        // If we're already on the same page, just scroll
        if (pathname === path) {
          setTimeout(() => {
            const element = document.querySelector(`#${hash}`);
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' });
            }
          }, 100);
        } else {
          // Navigate to the path first, then scroll to hash
          router.push(path);
          setTimeout(() => {
            const element = document.querySelector(`#${hash}`);
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' });
            }
          }, 500);
        }
        return;
      }
    }
    
    // Regular navigation
    if (href && href !== '#' && !href.startsWith('#')) {
      router.push(href);
    }
  };

  const handleHashClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    if (onItemClick) {
      onItemClick();
    }
    setIsOpen(false);
    // Handle hash links with smooth scroll
    if (href.startsWith('#')) {
      setTimeout(() => {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <div className="space-y-2">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between font-semibold text-gray-900 py-2 hover:text-purple-600 transition-colors"
        aria-expanded={isOpen}
      >
        {label}
        <svg
          className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <div className="space-y-4 pl-4 border-l-2 border-gray-100">
          {featured && (
            <div className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 p-4 rounded-lg">
              <h3 className="text-lg font-bold text-white mb-2">{featured.title}</h3>
              <p className="text-white/90 text-sm mb-4">{featured.description}</p>
              {featured.cta.href && featured.cta.href.startsWith('#') ? (
                <button
                  onClick={(e) => handleHashClick(e, featured.cta.href)}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-white text-gray-900 rounded-lg font-semibold text-sm hover:bg-gray-100 transition-colors"
                >
                  {featured.cta.label}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              ) : (
                <button
                  onClick={(e) => featured.cta.href && handleLinkClick(featured.cta.href, e)}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-white text-gray-900 rounded-lg font-semibold text-sm hover:bg-gray-100 transition-colors"
                >
                  {featured.cta.label}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              )}
            </div>
          )}
          {columns ? (
            <div className="space-y-4">
              {columns.map((column, colIdx) => (
                <div key={colIdx}>
                  <p className="text-xs font-semibold text-gray-500 uppercase mb-2 tracking-wider">
                    {column.label}
                  </p>
                  <div className="space-y-2">
                    {column.items.map((colItem, itemIdx) => {
                      if (!colItem.href || colItem.href === '#') {
                        return null;
                      }
                      
                      if (colItem.href.startsWith('#')) {
                        return (
                          <button
                            key={itemIdx}
                            onClick={(e) => handleHashClick(e, colItem.href || '#')}
                            className="block w-full text-left py-2 hover:text-purple-600 transition-colors"
                          >
                            <p className="font-semibold text-gray-900 text-sm mb-1">{colItem.label}</p>
                            {colItem.description && (
                              <p className="text-xs text-gray-600">{colItem.description}</p>
                            )}
                          </button>
                        );
                      }
                      
                      // Handle links with hash (e.g., /features#section)
                      return (
                        <button
                          key={itemIdx}
                          onClick={(e) => handleLinkClick(colItem.href || '#', e)}
                          className="block w-full text-left py-2 hover:text-purple-600 transition-colors"
                        >
                          <p className="font-semibold text-gray-900 text-sm mb-1">{colItem.label}</p>
                          {colItem.description && (
                            <p className="text-xs text-gray-600">{colItem.description}</p>
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          ) : items ? (
            <div className="space-y-2">
              {items.map((subItem, subIdx) => {
                if ('type' in subItem && subItem.type === 'group') {
                  return (
                    <div key={subIdx} className="space-y-1">
                      <p className="text-xs font-semibold text-gray-500 uppercase mb-1">
                        {subItem.label}
                      </p>
                      {subItem.items?.map((groupItem, groupIdx) => {
                        const href = 'href' in groupItem ? groupItem.href || '#' : '#';
                        if (!href || href === '#') {
                          return null;
                        }
                        
                        if (href.startsWith('#')) {
                          return (
                            <button
                              key={groupIdx}
                              onClick={(e) => handleHashClick(e, href)}
                              className="block w-full text-left text-sm text-gray-600 hover:text-gray-900 py-1 transition-colors"
                            >
                              {'label' in groupItem ? groupItem.label : ''}
                            </button>
                          );
                        }
                        
                        return (
                          <button
                            key={groupIdx}
                            onClick={(e) => handleLinkClick(href, e)}
                            className="block w-full text-left text-sm text-gray-600 hover:text-gray-900 py-1 transition-colors"
                          >
                            {'label' in groupItem ? groupItem.label : ''}
                          </button>
                        );
                      })}
                    </div>
                  );
                }
                const href = 'href' in subItem ? subItem.href || '#' : '#';
                if (!href || href === '#') {
                  return null;
                }
                
                if (href.startsWith('#')) {
                  return (
                    <button
                      key={subIdx}
                      onClick={(e) => handleHashClick(e, href)}
                      className="block w-full text-left text-sm text-gray-600 hover:text-gray-900 py-1 transition-colors"
                    >
                      {'label' in subItem ? subItem.label : ''}
                    </button>
                  );
                }
                
                return (
                  <button
                    key={subIdx}
                    onClick={(e) => handleLinkClick(href, e)}
                    className="block w-full text-left text-sm text-gray-600 hover:text-gray-900 py-1 transition-colors"
                  >
                    {'label' in subItem ? subItem.label : ''}
                  </button>
                );
              })}
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
}
