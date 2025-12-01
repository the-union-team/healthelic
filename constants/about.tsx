import { JSX } from 'react';

export interface AboutSection {
  id: string;
  title: string;
  description: string;
  details?: string[];
  cta?: {
    label: string;
    href: string;
  };
  icon: JSX.Element;
  visual: JSX.Element;
}

// Company Visual
const CompanyVisual = (
  <div className="relative w-full h-full flex items-center justify-center p-6">
    <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-blue-50 to-cyan-50 rounded-3xl"></div>
    <div className="relative z-10 w-full max-w-md bg-white rounded-2xl shadow-xl p-6 border border-purple-100">
      <div className="space-y-4">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
            <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-900">HealthElic</h3>
            <p className="text-sm text-gray-500">AI-Powered Healthcare</p>
          </div>
        </div>
        <div className="space-y-3">
          <div className="bg-purple-50 rounded-lg p-4 border-l-4 border-purple-500">
            <div className="text-sm font-semibold text-purple-700 mb-1">Intelligent</div>
            <div className="h-2 bg-purple-200 rounded w-full"></div>
          </div>
          <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
            <div className="text-sm font-semibold text-blue-700 mb-1">Secure</div>
            <div className="h-2 bg-blue-200 rounded w-full"></div>
          </div>
          <div className="bg-cyan-50 rounded-lg p-4 border-l-4 border-cyan-500">
            <div className="text-sm font-semibold text-cyan-700 mb-1">Compassionate</div>
            <div className="h-2 bg-cyan-200 rounded w-full"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// Mission Visual
const MissionVisual = (
  <div className="relative w-full h-full flex items-center justify-center p-6">
    <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-cyan-50 to-purple-50 rounded-3xl"></div>
    <div className="relative z-10 w-full max-w-md bg-white rounded-2xl shadow-xl p-6 border border-blue-100">
      <div className="text-center space-y-4">
        <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto shadow-lg">
          <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
        <div className="space-y-2">
          <div className="flex items-center justify-center gap-2">
            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            <span className="text-sm font-semibold text-gray-700">Physicians</span>
          </div>
          <div className="h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent"></div>
          <div className="flex items-center justify-center gap-2">
            <div className="w-3 h-3 bg-cyan-500 rounded-full"></div>
            <span className="text-sm font-semibold text-gray-700">Patients</span>
          </div>
          <div className="h-px bg-gradient-to-r from-transparent via-cyan-300 to-transparent"></div>
          <div className="flex items-center justify-center gap-2">
            <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
            <span className="text-sm font-semibold text-gray-700">Better Decisions</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// Careers Visual
const CareersVisual = (
  <div className="relative w-full h-full flex items-center justify-center p-6">
    <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-50 rounded-3xl"></div>
    <div className="relative z-10 w-full max-w-md bg-white rounded-2xl shadow-xl p-6 border border-cyan-100">
      <div className="space-y-4">
        <div className="text-center mb-4">
          <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto shadow-lg">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
        </div>
        <div className="space-y-2">
          {['AI Engineers', 'Clinical Researchers', 'Product Designers', 'Data Scientists'].map((role, idx) => (
            <div key={idx} className="bg-cyan-50 rounded-lg p-3 border border-cyan-200">
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-gray-700">{role}</span>
                <span className="text-xs text-cyan-600 font-medium">Open</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

// Expertise Visual
const ExpertiseVisual = (
  <div className="relative w-full h-full flex items-center justify-center p-6">
    <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-50 rounded-3xl"></div>
    <div className="relative z-10 w-full max-w-md bg-white rounded-2xl shadow-xl p-6 border border-indigo-100">
      <div className="space-y-4">
        <div className="grid grid-cols-3 gap-3">
          {[
            { label: 'Clinical', color: 'purple' },
            { label: 'Engineering', color: 'blue' },
            { label: 'AI/ML', color: 'indigo' },
          ].map((item, idx) => (
            <div key={idx} className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-lg p-4 text-center border border-purple-200">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-2">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="text-xs font-semibold text-gray-700">{item.label}</div>
            </div>
          ))}
        </div>
        <div className="bg-indigo-50 rounded-lg p-4 border-l-4 border-indigo-500">
          <div className="text-sm font-semibold text-indigo-700 mb-2">Decades of Experience</div>
          <div className="h-2 bg-indigo-200 rounded w-full"></div>
        </div>
      </div>
    </div>
  </div>
);

// Medical Advisory Board Visual
const AdvisoryBoardVisual = (
  <div className="relative w-full h-full flex items-center justify-center p-6">
    <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 rounded-3xl"></div>
    <div className="relative z-10 w-full max-w-md bg-white rounded-2xl shadow-xl p-6 border border-emerald-100">
      <div className="space-y-3">
        <div className="text-center mb-4">
          <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-500 rounded-full flex items-center justify-center mx-auto shadow-lg">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
        </div>
        {[1, 2, 3].map((i) => (
          <div key={i} className="bg-emerald-50 rounded-lg p-3 border border-emerald-200">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div className="flex-1">
                <div className="h-3 bg-emerald-200 rounded w-3/4 mb-1"></div>
                <div className="h-2 bg-emerald-100 rounded w-1/2"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// Partners Visual
const PartnersVisual = (
  <div className="relative w-full h-full flex items-center justify-center p-6">
    <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-cyan-50 to-purple-50 rounded-3xl"></div>
    <div className="relative z-10 w-full max-w-md bg-white rounded-2xl shadow-xl p-6 border border-blue-100">
      <div className="space-y-4">
        <div className="text-center mb-4">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto shadow-lg">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {['Academic', 'Healthcare', 'Research', 'Institutions'].map((type, idx) => (
            <div key={idx} className="bg-blue-50 rounded-lg p-3 border border-blue-200 text-center">
              <div className="text-xs font-semibold text-gray-700">{type}</div>
            </div>
          ))}
        </div>
        <div className="bg-cyan-50 rounded-lg p-3 border-l-4 border-cyan-500">
          <div className="text-xs font-semibold text-cyan-700">Continuous Validation</div>
        </div>
      </div>
    </div>
  </div>
);

export const aboutSections: AboutSection[] = [
  {
    id: 'company',
    title: 'Company',
    description: 'HealthElic develops intelligent, secure, and compassionate AI systems to make healthcare smarter, safer, and more human.',
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    visual: CompanyVisual,
  },
  {
    id: 'mission',
    title: 'Mission',
    description: 'To bridge the gap between medical expertise and machine intelligence — empowering physicians and patients to make better decisions, faster, and expanding access to care for every individual.',
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    visual: MissionVisual,
  },
  {
    id: 'careers',
    title: 'Careers',
    description: 'We\'re hiring innovators who believe AI should elevate, not replace, human care.',
    cta: {
      label: 'Explore Careers',
      href: '#careers',
    },
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    visual: CareersVisual,
  },
  {
    id: 'expertise',
    title: 'Expertise',
    description: 'Our team combines decades of experience across clinical medicine, biomedical engineering, and applied machine learning.',
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    visual: ExpertiseVisual,
  },
  {
    id: 'advisory-board',
    title: 'Medical Advisory Board',
    description: 'A distinguished panel of practicing clinicians and researchers guiding every stage of Medicus development.',
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    visual: AdvisoryBoardVisual,
  },
  {
    id: 'partners',
    title: 'Partners',
    description: 'HealthElic collaborates with academic institutions, healthcare organizations, and research labs to ensure continuous validation.',
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    visual: PartnersVisual,
  },
];




