'use client';

import Footer from '@/components/layout/Footer';
import Button from '@/components/ui/Button';
import ContactHero from '@/components/sections/contact/ContactHero';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <main>
        {/* Hero Section */}
        <ContactHero />

        {/* Contact Section */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 lg:mb-16">
              <h2 className="section-title text-gray-900 mb-4">
                Contact
              </h2>
              <p className="body text-gray-600 max-w-2xl mx-auto">
                Choose the best way to reach out to our team
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 max-w-5xl mx-auto">
              {/* General Inquiries */}
              <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg border border-gray-200 p-8 hover:shadow-xl hover:scale-105 transition-all duration-300 group">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="card-title text-gray-900 mb-2 text-center">General Inquiries</h3>
                </div>
                <p className="body-small text-gray-600 text-center mb-6">
                  Have questions? We're here to help.
                </p>
                <a
                  href="mailto:info@healthelic.com"
                  className="block text-center text-purple-600 hover:text-purple-700 font-semibold transition-colors"
                >
                  info@healthelic.com
                </a>
              </div>

              {/* Media */}
              <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg border border-gray-200 p-8 hover:shadow-xl hover:scale-105 transition-all duration-300 group">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="card-title text-gray-900 mb-2 text-center">Media</h3>
                </div>
                <p className="body-small text-gray-600 text-center mb-6">
                  Press inquiries and media requests.
                </p>
                <a
                  href="mailto:media@healthelic.com"
                  className="block text-center text-purple-600 hover:text-purple-700 font-semibold transition-colors"
                >
                  media@healthelic.com
                </a>
              </div>

              {/* Partnerships */}
              <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg border border-gray-200 p-8 hover:shadow-xl hover:scale-105 transition-all duration-300 group">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="card-title text-gray-900 mb-2 text-center">Partnerships</h3>
                </div>
                <p className="body-small text-gray-600 text-center mb-6">
                  Explore partnership opportunities.
                </p>
                <a
                  href="mailto:partnerships@healthelic.com"
                  className="block text-center text-purple-600 hover:text-purple-700 font-semibold transition-colors"
                >
                  partnerships@healthelic.com
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Why Contact Us Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 via-white to-purple-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Side - Content */}
              <div className="space-y-6">
            <h2 className="section-title text-gray-900">
              Why Connect with Us?
            </h2>
            <div className="space-y-4 text-gray-700 body-large">
                  <p>
                    At Healthelic, we're building the future of healthcare AI. Whether you're a physician looking to join our beta program, a potential partner interested in collaboration, or a media representative covering healthcare innovation, we'd love to hear from you.
                  </p>
                  <p>
                    Our team is committed to transforming healthcare through intelligent, secure, and compassionate AI systems that make healthcare smarter, safer, and more human.
                  </p>
                </div>
                <div className="pt-4">
                  <Button
                    href="#beta"
                    variant="primary"
                    className="inline-flex items-center gap-2"
                  >
                    Join Our Beta Program
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Button>
                </div>
              </div>

              {/* Right Side - Visual Elements */}
              <div className="relative h-[400px] sm:h-[500px] flex items-center justify-center">
                <div className="absolute inset-0 overflow-hidden">
                  <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob"></div>
                  <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-2000"></div>
                  <div className="absolute bottom-1/4 left-1/3 w-48 h-48 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-4000"></div>
                </div>
                
                {/* Central visual */}
                <div className="relative z-10 w-full max-w-md">
                  <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-2xl border border-purple-100 p-8 hover:shadow-3xl transition-all duration-300">
                    <div className="grid grid-cols-2 gap-6">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
                          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                          </svg>
                        </div>
                        <h4 className="font-bold text-gray-900 mb-1">Expert Team</h4>
                        <p className="text-sm text-gray-600">Medical professionals & AI experts</p>
                      </div>
                      <div className="text-center">
                        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-3">
                          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                          </svg>
                        </div>
                        <h4 className="font-bold text-gray-900 mb-1">Secure & Trusted</h4>
                        <p className="text-sm text-gray-600">HIPAA-compliant solutions</p>
                      </div>
                      <div className="text-center">
                        <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-3">
                          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                        </div>
                        <h4 className="font-bold text-gray-900 mb-1">Innovation</h4>
                        <p className="text-sm text-gray-600">Cutting-edge AI technology</p>
                      </div>
                      <div className="text-center">
                        <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-3">
                          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                          </svg>
                        </div>
                        <h4 className="font-bold text-gray-900 mb-1">Compassionate</h4>
                        <p className="text-sm text-gray-600">Human-centered design</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Press Section */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg border border-gray-200 p-8 lg:p-12 hover:shadow-xl transition-all duration-300">
                <div className="text-center mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center mb-6 mx-auto">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                    </svg>
                  </div>
                  <h2 className="section-title text-gray-900 mb-4">Press</h2>
                  <p className="body-large text-gray-700 max-w-2xl mx-auto">
                    Access press releases, brand assets, and recent coverage.
                  </p>
                </div>
                <div className="text-center">
                  <Button
                    href="#press-kit"
                    variant="primary"
                    className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-full font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                  >
                    View Press Kit
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-br from-purple-50 via-blue-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-2xl shadow-lg border border-purple-200 p-8 lg:p-12 hover:shadow-xl transition-all duration-300">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  {/* Left Side - Content */}
                  <div className="text-center md:text-left">
                    <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center mb-6 mx-auto md:mx-0">
                      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Newsletter</h2>
                    <p className="text-gray-700 text-lg sm:text-xl leading-relaxed mb-6">
                      Stay informed about product releases, medical AI insights, and Healthelic updates.
                    </p>
                    <Button
                      href="#subscribe"
                      variant="primary"
                      className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-full font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                    >
                      Subscribe
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Button>
                  </div>

                  {/* Right Side - Visual */}
                  <div className="relative h-[200px] sm:h-[250px] flex items-center justify-center">
                    <div className="absolute inset-0 overflow-hidden">
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-gradient-to-br from-purple-200 to-blue-200 rounded-full blur-3xl opacity-50 animate-pulse"></div>
                    </div>
                    <div className="relative z-10 w-32 h-32 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center shadow-2xl">
                      <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
