'use client';

import Button from '@/components/ui/Button';

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
      className={`relative bg-white rounded-2xl shadow-lg border-2 transition-all duration-300 hover:shadow-xl group overflow-hidden ${
        highlight
          ? 'border-purple-500 scale-105 lg:scale-110'
          : 'border-gray-200 hover:border-purple-300'
      }`}
    >
      {/* Hover gradient effect */}
      <div className={`absolute inset-0 bg-gradient-to-br from-purple-50/0 to-blue-50/0 group-hover:from-purple-50/50 group-hover:to-blue-50/50 transition-all duration-300 pointer-events-none ${
        highlight ? 'from-purple-50/30 to-blue-50/30' : ''
      }`}></div>

      {badge && (
        <div className="absolute top-2 left-1/2 -translate-x-1/2 z-20">
          <span className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg animate-pulse">
            {badge}
          </span>
        </div>
      )}
      
      <div className="relative z-10 p-8 lg:p-10">
        {/* Header */}
        <div className="text-center mb-8">
          <h3 className="subsection-title text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
            {title}
          </h3>
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
            <li key={index} className="flex items-start gap-3 group/item">
              <div className="w-6 h-6 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 transition-transform duration-300">
                <svg
                  className="w-4 h-4 text-white"
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
              </div>
              <span className="text-gray-700 text-sm sm:text-base leading-relaxed">{feature}</span>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <Button
          href={cta.href}
          variant={highlight ? 'primary' : 'outline'}
          className={`w-full text-center py-3 px-6 rounded-full font-semibold transition-all duration-300 ${
            highlight
              ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:from-purple-600 hover:to-blue-600 shadow-lg hover:shadow-xl hover:scale-105'
              : 'bg-gray-100 text-gray-900 hover:bg-gray-200 border border-gray-300 hover:border-purple-300'
          }`}
        >
          {cta.label}
        </Button>
      </div>
    </div>
  );
}
