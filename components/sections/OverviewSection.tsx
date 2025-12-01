import Button from "@/components/ui/Button";

export default function OverviewSection() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Side - Text Content */}
          <div className="space-y-6 lg:space-y-8">
            {/* OVERVIEW Heading */}
            <h2 className="label text-gray-700">
              OVERVIEW
            </h2>

            {/* Main Title */}
            <h3 className="section-title">
              Say hello to the{" "}
              <span className="bg-gradient-to-r from-purple-400 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                smarter, more human side
              </span>{" "}
              of healthcare.
            </h3>

            {/* Paragraphs */}
            <div className="space-y-4 text-gray-700 body">
              <p>
                Healthelic&apos;s intelligent clinical copilots reason, act, and evolve to help you help your patients.
              </p>
              <p>
                Our first product, Medicus, combines clinical intelligence,
                evidence-based reasoning, and compassionate design to help you
                track symptoms, interpret reports, and make informed health
                decisions with confidence.
              </p>
            </div>

            {/* Button */}
            <div className="pt-2">
              <Button
                href="#beta"
                variant="primary"
                className="inline-flex items-center gap-2 group bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white border-0 transition-all duration-300"
              >
                Physician? Join Our Beta Program
                <svg
                  className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Button>
            </div>
          </div>

          {/* Right Side - Healthcare-Focused Visual */}
          <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] flex items-center justify-center">
            <div className="relative w-full h-full">
              {/* Healthcare-themed SVG illustration */}
              <svg
                viewBox="0 0 700 550"
                className="w-full h-full max-w-[700px]"
                preserveAspectRatio="xMidYMid meet"
              >
                <defs>
                  <linearGradient id="heartGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#a855f7" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.9" />
                  </linearGradient>
                  <linearGradient id="handGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.7" />
                    <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.7" />
                  </linearGradient>
                  <linearGradient id="personGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#6366f1" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.8" />
                  </linearGradient>
                </defs>

                {/* Central Heart Symbol - Larger and more prominent */}
                <g transform="translate(350, 250)">
                  <path
                    d="M 0,0 C -45,-45 -90,-25 -90,25 C -90,70 -25,120 0,160 C 25,120 90,70 90,25 C 90,-25 45,-45 0,0 Z"
                    fill="url(#heartGradient)"
                    stroke="#6366f1"
                    strokeWidth="4"
                    className="animate-pulse"
                  />
                </g>

                {/* Doctor/Clinician Figure - Left */}
                <g transform="translate(150, 200)">
                  {/* Head */}
                  <circle cx="0" cy="0" r="25" fill="url(#personGradient)" stroke="#6366f1" strokeWidth="2" />
                  {/* Body */}
                  <rect x="-20" y="25" width="40" height="60" rx="5" fill="url(#personGradient)" stroke="#6366f1" strokeWidth="2" />
                  {/* Arms - reaching out */}
                  <ellipse cx="-35" cy="50" rx="8" ry="25" fill="url(#personGradient)" stroke="#6366f1" strokeWidth="2" transform="rotate(-20)" />
                  <ellipse cx="35" cy="50" rx="8" ry="25" fill="url(#personGradient)" stroke="#6366f1" strokeWidth="2" transform="rotate(20)" />
                  {/* Legs */}
                  <rect x="-15" y="85" width="12" height="40" rx="3" fill="url(#personGradient)" />
                  <rect x="3" y="85" width="12" height="40" rx="3" fill="url(#personGradient)" />
                  {/* Medical badge/ID */}
                  <circle cx="15" cy="15" r="8" fill="#3b82f6" fillOpacity="0.9" />
                  <path d="M 11,15 L 15,19 L 19,11" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </g>

                {/* Patient Figure - Right */}
                <g transform="translate(550, 200)">
                  {/* Head */}
                  <circle cx="0" cy="0" r="25" fill="url(#personGradient)" stroke="#6366f1" strokeWidth="2" />
                  {/* Body */}
                  <rect x="-20" y="25" width="40" height="60" rx="5" fill="url(#personGradient)" stroke="#6366f1" strokeWidth="2" />
                  {/* Arms - receiving care */}
                  <ellipse cx="-35" cy="50" rx="8" ry="25" fill="url(#personGradient)" stroke="#6366f1" strokeWidth="2" transform="rotate(20)" />
                  <ellipse cx="35" cy="50" rx="8" ry="25" fill="url(#personGradient)" stroke="#6366f1" strokeWidth="2" transform="rotate(-20)" />
                  {/* Legs */}
                  <rect x="-15" y="85" width="12" height="40" rx="3" fill="url(#personGradient)" />
                  <rect x="3" y="85" width="12" height="40" rx="3" fill="url(#personGradient)" />
                </g>

                {/* Connection/Care Line between people */}
                <path
                  d="M 200,250 Q 350,200 500,250"
                  stroke="#a855f7"
                  strokeWidth="3"
                  strokeDasharray="8,4"
                  fill="none"
                  strokeOpacity="0.6"
                />

                {/* Medical Cross - Top Left */}
                <g transform="translate(100, 100)">
                  <rect x="-12" y="-35" width="24" height="70" rx="4" fill="#3b82f6" fillOpacity="0.8" />
                  <rect x="-35" y="-12" width="70" height="24" rx="4" fill="#3b82f6" fillOpacity="0.8" />
                </g>

                {/* Stethoscope - Top Right */}
                <g transform="translate(600, 100)">
                  <path
                    d="M 0,0 Q 15,-8 25,0 Q 35,8 25,15 Q 15,22 0,30"
                    fill="none"
                    stroke="#8b5cf6"
                    strokeWidth="5"
                    strokeLinecap="round"
                  />
                  <circle cx="25" cy="15" r="15" fill="none" stroke="#8b5cf6" strokeWidth="5" />
                  <circle cx="25" cy="15" r="8" fill="#8b5cf6" fillOpacity="0.3" />
                </g>

                {/* Heartbeat/Pulse Line - Bottom Center */}
                <g transform="translate(200, 450)">
                  <path
                    d="M 0,20 L 20,20 L 25,0 L 30,20 L 50,20 L 55,5 L 60,20 L 80,20 L 85,10 L 90,20 L 110,20 L 115,0 L 120,20 L 140,20 L 145,15 L 150,20 L 170,20 L 175,5 L 180,20 L 200,20"
                    stroke="#ef4444"
                    strokeWidth="4"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <line x1="0" y1="20" x2="200" y2="20" stroke="#e0e7ff" strokeWidth="2" strokeDasharray="3,3" />
                </g>

                {/* Medical Chart/Document - Bottom Left */}
                <g transform="translate(80, 380)">
                  <rect x="0" y="0" width="60" height="80" rx="3" fill="white" stroke="#6366f1" strokeWidth="2" fillOpacity="0.9" />
                  <line x1="8" y1="15" x2="52" y2="15" stroke="#6366f1" strokeWidth="2" />
                  <line x1="8" y1="25" x2="45" y2="25" stroke="#a855f7" strokeWidth="1.5" />
                  <line x1="8" y1="35" x2="48" y2="35" stroke="#a855f7" strokeWidth="1.5" />
                  <line x1="8" y1="45" x2="42" y2="45" stroke="#a855f7" strokeWidth="1.5" />
                  <circle cx="50" cy="50" r="5" fill="#3b82f6" fillOpacity="0.6" />
                  <line x1="8" y1="60" x2="40" y2="60" stroke="#a855f7" strokeWidth="1.5" />
                </g>

                {/* Pill/Medicine - Bottom Right */}
                <g transform="translate(580, 400)">
                  <ellipse cx="0" cy="0" rx="20" ry="12" fill="#3b82f6" fillOpacity="0.8" stroke="#6366f1" strokeWidth="2" />
                  <line x1="-15" y1="0" x2="15" y2="0" stroke="white" strokeWidth="2" />
                </g>

                {/* Helping Hands - Enhanced */}
                <g transform="translate(120, 320) scale(0.7)">
                  <path
                    d="M 0,0 Q -25,-35 -35,-25 Q -45,-15 -40,5 Q -35,25 -25,35 Q -15,45 0,50 Q 15,45 25,35 Q 35,25 40,5 Q 45,-15 35,-25 Q 25,-35 0,0"
                    fill="url(#handGradient)"
                    stroke="#6366f1"
                    strokeWidth="2.5"
                  />
                  <circle cx="-18" cy="12" r="5" fill="#6366f1" fillOpacity="0.9" />
                  <circle cx="0" cy="8" r="5" fill="#6366f1" fillOpacity="0.9" />
                  <circle cx="18" cy="12" r="5" fill="#6366f1" fillOpacity="0.9" />
                </g>

                <g transform="translate(580, 320) scale(0.7) scaleX(-1)">
                  <path
                    d="M 0,0 Q -25,-35 -35,-25 Q -45,-15 -40,5 Q -35,25 -25,35 Q -15,45 0,50 Q 15,45 25,35 Q 35,25 40,5 Q 45,-15 35,-25 Q 25,-35 0,0"
                    fill="url(#handGradient)"
                    stroke="#6366f1"
                    strokeWidth="2.5"
                  />
                  <circle cx="-18" cy="12" r="5" fill="#6366f1" fillOpacity="0.9" />
                  <circle cx="0" cy="8" r="5" fill="#6366f1" fillOpacity="0.9" />
                  <circle cx="18" cy="12" r="5" fill="#6366f1" fillOpacity="0.9" />
                </g>

                {/* Small Hearts (decorative) */}
                <g transform="translate(250, 150)">
                  <path
                    d="M 0,0 C -10,-10 -20,-5 -20,5 C -20,15 -5,25 0,35 C 5,25 20,15 20,5 C 20,-5 10,-10 0,0 Z"
                    fill="#a855f7"
                    fillOpacity="0.5"
                  />
                </g>
                <g transform="translate(450, 150)">
                  <path
                    d="M 0,0 C -10,-10 -20,-5 -20,5 C -20,15 -5,25 0,35 C 5,25 20,15 20,5 C 20,-5 10,-10 0,0 Z"
                    fill="#3b82f6"
                    fillOpacity="0.5"
                  />
                </g>
                <g transform="translate(300, 400)">
                  <path
                    d="M 0,0 C -8,-8 -16,-4 -16,4 C -16,12 -4,20 0,28 C 4,20 16,12 16,4 C 16,-4 8,-8 0,0 Z"
                    fill="#a855f7"
                    fillOpacity="0.4"
                  />
                </g>

                {/* Connection Lines (enhanced network) */}
                <path
                  d="M 100,100 L 350,250"
                  stroke="#e0e7ff"
                  strokeWidth="2"
                  strokeDasharray="6,4"
                  strokeOpacity="0.4"
                />
                <path
                  d="M 350,250 L 600,100"
                  stroke="#e0e7ff"
                  strokeWidth="2"
                  strokeDasharray="6,4"
                  strokeOpacity="0.4"
                />
                <path
                  d="M 120,320 L 350,250"
                  stroke="#e0e7ff"
                  strokeWidth="2"
                  strokeDasharray="6,4"
                  strokeOpacity="0.4"
                />
                <path
                  d="M 350,250 L 580,320"
                  stroke="#e0e7ff"
                  strokeWidth="2"
                  strokeDasharray="6,4"
                  strokeOpacity="0.4"
                />
                <path
                  d="M 200,250 L 500,250"
                  stroke="#e0e7ff"
                  strokeWidth="2"
                  strokeDasharray="6,4"
                  strokeOpacity="0.3"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
