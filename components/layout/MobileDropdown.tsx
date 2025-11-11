'use client';

import { useState } from 'react';
import Link from 'next/link';
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

  return (
    <div className="space-y-2">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between font-semibold text-gray-900 py-2"
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
        <div className="space-y-4">
          {featured && (
            <div className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 p-4 rounded-lg">
              <h3 className="text-lg font-bold text-white mb-2">{featured.title}</h3>
              <p className="text-white/90 text-sm mb-4">{featured.description}</p>
              <Link
                href={featured.cta.href}
                className="inline-flex items-center gap-2 px-4 py-2 bg-white text-gray-900 rounded-lg font-semibold text-sm"
                onClick={onItemClick}
              >
                {featured.cta.label}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          )}
          {columns ? (
            <div className="space-y-4 pl-2">
              {columns.map((column, colIdx) => (
                <div key={colIdx}>
                  <p className="text-xs font-semibold text-gray-500 uppercase mb-2 tracking-wider">
                    {column.label}
                  </p>
                  <div className="space-y-2">
                    {column.items.map((colItem, itemIdx) => (
                      <Link
                        key={itemIdx}
                        href={colItem.href}
                        className="block py-2"
                        onClick={onItemClick}
                      >
                        <p className="font-semibold text-gray-900 text-sm mb-1">{colItem.label}</p>
                        {colItem.description && (
                          <p className="text-xs text-gray-600">{colItem.description}</p>
                        )}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : items ? (
            <div className="pl-4 space-y-2 border-l-2 border-gray-100">
              {items.map((subItem, subIdx) => {
                if ('type' in subItem && subItem.type === 'group') {
                  return (
                    <div key={subIdx} className="space-y-1">
                      <p className="text-xs font-semibold text-gray-500 uppercase mb-1">
                        {subItem.label}
                      </p>
                      {subItem.items?.map((groupItem, groupIdx) => (
                        <Link
                          key={groupIdx}
                          href={'href' in groupItem ? groupItem.href || '#' : '#'}
                          className="block text-sm text-gray-600 hover:text-gray-900 py-1 transition-colors"
                          onClick={onItemClick}
                        >
                          {'label' in groupItem ? groupItem.label : ''}
                        </Link>
                      ))}
                    </div>
                  );
                }
                return (
                  <Link
                    key={subIdx}
                    href={'href' in subItem ? subItem.href || '#' : '#'}
                    className="block text-sm text-gray-600 hover:text-gray-900 py-1 transition-colors"
                    onClick={onItemClick}
                  >
                    {'label' in subItem ? subItem.label : ''}
                  </Link>
                );
              })}
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
}

