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
        {featured && (
          <div className="w-full lg:w-64 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 p-5 lg:p-6 flex flex-col justify-between border-r border-indigo-500/20">
            <div>
              <h3 className="text-lg lg:text-xl font-bold text-white mb-2 leading-tight">
                {featured.title}
              </h3>
              <p className="text-white/90 text-xs leading-relaxed line-clamp-3">
                {featured.description}
              </p>
            </div>
            <Link
              href={featured.cta.href}
              className="mt-4 inline-flex items-center gap-2 px-3 py-2 bg-white text-gray-900 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-200 w-fit text-sm"
              onClick={onItemClick}
            >
              {featured.cta.label}
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        )}
        <div className="flex-1 p-5 lg:p-6">
          <div className={`grid grid-cols-1 sm:grid-cols-2 ${columns.length >= 4 ? 'lg:grid-cols-4' : 'lg:grid-cols-3'} gap-x-6 gap-y-5`}>
            {columns.map((column, colIdx) => (
              <div key={colIdx} className={colIdx > 0 ? "border-l border-gray-200 pl-6" : ""}>
                {column.href ? (
                  <Link
                    href={column.href}
                    className="block group"
                    onClick={onItemClick}
                  >
                    <h4 className="text-xs font-bold text-gray-900 uppercase mb-3 tracking-wider pb-2 border-b border-gray-200 group-hover:text-indigo-600 transition-colors cursor-pointer">
                      {column.label}
                    </h4>
                  </Link>
                ) : (
                  <h4 className="text-xs font-bold text-gray-900 uppercase mb-3 tracking-wider pb-2 border-b border-gray-200">
                    {column.label}
                  </h4>
                )}
                <div className="space-y-2.5">
                  {column.items.map((colItem, itemIdx) => (
                    <Link
                      key={itemIdx}
                      href={colItem.href}
                      className="block group py-1"
                      onClick={onItemClick}
                    >
                      <p className="font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors text-sm mb-0.5">
                        {colItem.label}
                      </p>
                      {colItem.description && (
                        <p className="text-xs text-gray-500 leading-snug line-clamp-2">
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

