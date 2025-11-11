import Link from 'next/link';
import type { FeaturedSection, Column, NavSubItem, NavGroup } from '@/types/navbar.types';

interface DropdownContentProps {
  featured?: FeaturedSection;
  columns?: Column[];
  items?: (NavSubItem | NavGroup)[];
  onItemClick?: () => void;
}

export default function DropdownContent({
  featured,
  columns,
  items,
  onItemClick,
}: DropdownContentProps) {
  if (featured && columns) {
    return (
      <div className="flex flex-col lg:flex-row">
        <div className="w-full lg:w-80 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 p-6 lg:p-8 flex flex-col justify-between">
          <div>
            <h3 className="text-xl lg:text-2xl font-bold text-white mb-3 leading-tight">
              {featured.title}
            </h3>
            <p className="text-white/90 text-sm leading-relaxed">
              {featured.description}
            </p>
          </div>
          <Link
            href={featured.cta.href}
            className="mt-6 inline-flex items-center gap-2 px-4 py-2.5 bg-white text-gray-900 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-200 w-fit"
            onClick={onItemClick}
          >
            {featured.cta.label}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
        <div className="flex-1 p-4 sm:p-6 lg:p-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {columns.map((column, colIdx) => (
              <div key={colIdx}>
                <p className="text-xs font-semibold text-gray-500 uppercase mb-4 tracking-wider">
                  {column.label}
                </p>
                <div className="space-y-3 lg:space-y-4">
                  {column.items.map((colItem, itemIdx) => (
                    <Link
                      key={itemIdx}
                      href={colItem.href}
                      className="block group"
                      onClick={onItemClick}
                    >
                      <p className="font-semibold text-gray-900 group-hover:text-gray-700 transition-colors mb-1 text-sm lg:text-base">
                        {colItem.label}
                      </p>
                      {colItem.description && (
                        <p className="text-xs lg:text-sm text-gray-600 leading-relaxed">
                          {colItem.description}
                        </p>
                      )}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return null;
}

