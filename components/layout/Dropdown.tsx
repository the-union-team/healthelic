"use client";

import { useState, useRef, useEffect } from "react";
import DropdownContent from "./DropdownContent";
import type {
  NavSubItem,
  NavGroup,
  FeaturedSection,
  Column,
} from "@/types/navbar.types";
import Link from "next/link";

interface DropdownProps {
  label: string;
  featured?: FeaturedSection;
  columns?: Column[];
  items?: (NavSubItem | NavGroup)[];
  onItemClick?: () => void;
}

export default function Dropdown({
  label,
  featured,
  columns,
  items,
  onItemClick,
}: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearHoverTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };

  const handleMouseEnter = () => {
    clearHoverTimeout();
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    clearHoverTimeout();
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 150);
  };

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    return () => {
      clearHoverTimeout();
    };
  }, []);

  const hasGroups = items?.some(
    (subItem) => "type" in subItem && subItem.type === "group"
  );
  const hasRichLayout = featured && columns;

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        onClick={handleClick}
        className={`font-semibold text-gray-900 transition-all duration-200 flex items-center gap-1 px-3 py-2 rounded-full ${
          isOpen ? "bg-gray-100" : "hover:bg-gray-100"
        }`}
      >
        {label}
      </button>
      {isOpen && (
        <div className="hidden lg:block fixed top-20 left-1/2 -translate-x-1/2 z-50 w-[min(calc(100vw-2rem),80rem)] max-w-7xl">
          <div
            className="bg-white border border-gray-200 rounded-xl shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200 overflow-hidden w-full mt-2 max-h-[calc(100vh-6rem)] overflow-y-auto"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {hasRichLayout ? (
              <DropdownContent
                featured={featured}
                columns={columns}
                onItemClick={onItemClick}
              />
            ) : hasGroups ? (
              <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                  {items?.map((group, groupIdx) => {
                    if ("type" in group && group.type === "group") {
                      return (
                        <div key={groupIdx}>
                          <p className="text-xs font-semibold text-gray-500 uppercase mb-3 tracking-wider">
                            {group.label}
                          </p>
                          <div className="space-y-1">
                            {group.items.map((subItem, subIdx) => (
                              <Link
                                key={subIdx}
                                href={subItem.href}
                                className="block py-2 px-3 text-sm text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-all duration-150"
                                onClick={onItemClick}
                              >
                                {subItem.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                      );
                    }
                    return null;
                  })}
                </div>
              </div>
            ) : (
              <div className="p-4 sm:p-6 space-y-1">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {items?.map((subItem, idx) => {
                    if ("href" in subItem) {
                      return (
                        <Link
                          key={idx}
                          href={subItem.href}
                          className="block py-2 px-3 text-sm text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-all duration-150"
                          onClick={onItemClick}
                        >
                          {subItem.label}
                        </Link>
                      );
                    }
                    return null;
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
