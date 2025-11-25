export default function PricingHero() {
  return (
    <section className="min-h-[calc(100vh-8rem)] bg-white pb-10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center pt-8 lg:pt-16 pb-12 lg:pb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            <span className="bg-gradient-to-r from-purple-400 via-purple-500 to-blue-500 bg-clip-text text-transparent">
              Simple, Transparent Pricing
            </span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Choose the plan that works best for you. Start with our free beta access and experience the power of HealthElic.
          </p>
        </div>
      </div>
    </section>
  );
}

