'use client';

import { JSX } from 'react';

interface PricingCardProps {
  title: string;
  price: string;
  description?: string;
  features: string[];
  cta: {
    label: string;
    href: string;
    variant?: 'primary' | 'secondary';
  };
  highlight?: boolean;
  badge?: string;
}

export default function PricingCard({
  title,
  price,
  description,
  features,
  cta,
  highlight = false,
  badge,
}: PricingCardProps) {
  return (
    <div
      className={`relative bg-white rounded-2xl shadow-lg border-2 transition-all duration-300 hover:shadow-xl ${
        highlight
          ? 'border-purple-500 scale-105 lg:scale-110'
          : 'border-gray-200 hover:border-purple-300'
      }`}
    >
      {badge && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <span className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
            {badge}
          </span>
        </div>
      )}
      
      <div className="p-8 lg:p-10">
        {/* Header */}
        <div className="text-center mb-8">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">{title}</h3>
          <div className="mb-4">
            <span className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-purple-400 via-purple-500 to-blue-500 bg-clip-text text-transparent">
              {price}
            </span>
          </div>
          {description && (
            <p className="text-gray-600 text-sm sm:text-base">{description}</p>
          )}
        </div>

        {/* Features */}
        <ul className="space-y-4 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <svg
                className="w-6 h-6 text-purple-500 flex-shrink-0 mt-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="text-gray-700 text-sm sm:text-base leading-relaxed">{feature}</span>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <a
          href={cta.href}
          className={`block w-full text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
            highlight
              ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:from-purple-600 hover:to-blue-600 shadow-lg hover:shadow-xl'
              : 'bg-gray-100 text-gray-900 hover:bg-gray-200 border border-gray-300'
          }`}
        >
          {cta.label}
        </a>
      </div>
    </div>
  );
}

