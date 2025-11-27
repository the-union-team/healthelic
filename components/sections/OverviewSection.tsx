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
                Healthelic builds intelligent clinical copilots that don&apos;t just
                respond — they reason, act, and evolve.
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
                className="inline-flex items-center gap-2 group"
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

          {/* Right Side - 3D Isometric Graphic */}
          <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] flex items-center justify-center">
            <div className="relative w-full h-full">
              {/* Isometric Grid Background */}
              <svg
                className="absolute inset-0 w-full h-full opacity-10"
                viewBox="0 0 600 600"
                preserveAspectRatio="xMidYMid meet"
              >
                <defs>
                  <pattern
                    id="isometric-grid"
                    x="0"
                    y="0"
                    width="60"
                    height="60"
                    patternUnits="userSpaceOnUse"
                  >
                    <path
                      d="M 0 30 L 30 0 L 60 30 L 30 60 Z"
                      fill="none"
                      stroke="#9ca3af"
                      strokeWidth="0.5"
                    />
                    <path
                      d="M 30 0 L 30 60"
                      fill="none"
                      stroke="#9ca3af"
                      strokeWidth="0.5"
                    />
                    <path
                      d="M 0 30 L 60 30"
                      fill="none"
                      stroke="#9ca3af"
                      strokeWidth="0.5"
                    />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#isometric-grid)" />
              </svg>

              {/* Main 3D Isometric Container - SVG based for better rendering */}
              <div className="absolute inset-0 flex items-center justify-center">
                <svg
                  viewBox="0 0 500 400"
                  className="w-full h-full max-w-[600px]"
                  preserveAspectRatio="xMidYMid meet"
                >
                  {/* Base Platform - Solid blue base */}
                  <g transform="translate(40, 240)">
                    {/* Base top face */}
                    <polygon
                      points="0,0 320,0 380,60 60,60"
                      fill="#2563eb"
                      fillOpacity="0.8"
                      stroke="#1e40af"
                      strokeWidth="1.5"
                    />
                    {/* Base right face */}
                    <polygon
                      points="380,60 380,120 440,180 440,120"
                      fill="#1e40af"
                      fillOpacity="0.9"
                      stroke="#172554"
                      strokeWidth="1.5"
                    />
                    {/* Base left face */}
                    <polygon
                      points="0,0 60,60 60,120 0,60"
                      fill="#1e40af"
                      fillOpacity="0.9"
                      stroke="#172554"
                      strokeWidth="1.5"
                    />
                  </g>

                  {/* Main Container - Translucent blue outer shell */}
                  <g transform="translate(50, 50)">
                    {/* Top face - more translucent */}
                    <polygon
                      points="0,0 300,0 360,60 60,60"
                      fill="#60a5fa"
                      fillOpacity="0.25"
                      stroke="#3b82f6"
                      strokeWidth="2"
                      strokeOpacity="0.6"
                    />

                    {/* Front face */}
                    <polygon
                      points="0,0 60,60 60,180 0,120"
                      fill="#3b82f6"
                      fillOpacity="0.35"
                      stroke="#2563eb"
                      strokeWidth="2"
                      strokeOpacity="0.7"
                    />

                    {/* Right face */}
                    <polygon
                      points="300,0 360,60 360,180 300,120"
                      fill="#2563eb"
                      fillOpacity="0.45"
                      stroke="#1e40af"
                      strokeWidth="2"
                      strokeOpacity="0.8"
                    />

                    {/* Internal blocks - grid pattern with varying heights */}
                    {Array.from({ length: 7 }).map((_, col) =>
                      Array.from({ length: 5 }).map((_, row) => {
                        const x = 15 + col * 38;
                        const y = 15 + row * 28;
                        // Vary heights more naturally
                        const heightVariation = [
                          [12, 18, 15, 20, 14],
                          [16, 14, 19, 13, 17],
                          [13, 20, 16, 18, 15],
                          [19, 15, 14, 16, 20],
                          [15, 17, 18, 14, 16],
                          [14, 19, 13, 20, 17],
                          [18, 16, 20, 15, 14],
                        ];
                        const height = heightVariation[col % 7][row % 5];
                        const blockHeight = height;

                        return (
                          <g key={`${col}-${row}`}>
                            {/* Block top */}
                            <polygon
                              points={`${x},${y} ${x + 30},${y} ${x + 36},${
                                y + 6
                              } ${x + 6},${y + 6}`}
                              fill="#1e40af"
                              fillOpacity="0.65"
                              stroke="#1e3a8a"
                              strokeWidth="0.8"
                            />
                            {/* Block front */}
                            <polygon
                              points={`${x},${y} ${x + 6},${y + 6} ${x + 6},${
                                y + 6 + blockHeight
                              } ${x},${y + blockHeight}`}
                              fill="#1e40af"
                              fillOpacity="0.75"
                              stroke="#1e3a8a"
                              strokeWidth="0.8"
                            />
                            {/* Block right */}
                            <polygon
                              points={`${x + 30},${y} ${x + 36},${y + 6} ${
                                x + 36
                              },${y + 6 + blockHeight} ${x + 30},${
                                y + blockHeight
                              }`}
                              fill="#1e3a8a"
                              fillOpacity="0.85"
                              stroke="#172554"
                              strokeWidth="0.8"
                            />
                          </g>
                        );
                      })
                    )}
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
