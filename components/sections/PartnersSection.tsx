import Image from 'next/image';

const partners = [
    {
        name: "Healthcare Partner",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='100' viewBox='0 0 200 100'%3E%3Crect fill='%23f8fafc' width='200' height='100'/%3E%3Cg%3E%3Cpath d='M100 20 L100 50 M85 35 L115 35' stroke='%236366f1' strokeWidth='4' strokeLinecap='round'/%3E%3Ccircle cx='100' cy='60' r='8' fill='%236366f1'/%3E%3Cpath d='M100 68 L100 80' stroke='%236366f1' strokeWidth='3' strokeLinecap='round'/%3E%3C/g%3E%3C/svg%3E"
    },
    {
        name: "Medical Institution",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='100' viewBox='0 0 200 100'%3E%3Crect fill='%23f8fafc' width='200' height='100'/%3E%3Cg%3E%3Cpath d='M70 40 Q70 30 80 30 L120 30 Q130 30 130 40 L130 70 Q130 80 120 80 L80 80 Q70 80 70 70 Z' fill='none' stroke='%238b5cf6' strokeWidth='3'/%3E%3Cpath d='M85 50 L100 65 L115 50' fill='none' stroke='%238b5cf6' strokeWidth='2.5' strokeLinecap='round' strokeLinejoin='round'/%3E%3C/g%3E%3C/svg%3E"
    },
    {
        name: "Technology Partner",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='100' viewBox='0 0 200 100'%3E%3Crect fill='%23f8fafc' width='200' height='100'/%3E%3Cg%3E%3Crect x='70' y='35' width='60' height='30' rx='4' fill='none' stroke='%233b82f6' strokeWidth='3'/%3E%3Ccircle cx='85' cy='50' r='3' fill='%233b82f6'/%3E%3Cpath d='M95 45 L105 45 M95 50 L110 50 M95 55 L105 55' stroke='%233b82f6' strokeWidth='2' strokeLinecap='round'/%3E%3Cpath d='M70 35 L65 30 L65 75 L70 70' fill='none' stroke='%233b82f6' strokeWidth='3'/%3E%3C/g%3E%3C/svg%3E"
    },
    {
        name: "Research Center",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='100' viewBox='0 0 200 100'%3E%3Crect fill='%23f8fafc' width='200' height='100'/%3E%3Cg%3E%3Cpath d='M85 75 L85 45 L100 35 L115 45 L115 75 Z' fill='none' stroke='%236366f1' strokeWidth='3'/%3E%3Cpath d='M90 60 L100 50 L110 60' fill='none' stroke='%236366f1' strokeWidth='2.5' strokeLinecap='round'/%3E%3Ccircle cx='100' cy='55' r='2' fill='%236366f1'/%3E%3C/g%3E%3C/svg%3E"
    },
    {
        name: "Pharmaceutical",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='100' viewBox='0 0 200 100'%3E%3Crect fill='%23f8fafc' width='200' height='100'/%3E%3Cg%3E%3Cpath d='M80 50 Q80 40 90 40 L110 40 Q120 40 120 50 L120 60 Q120 70 110 70 L90 70 Q80 70 80 60 Z' fill='none' stroke='%238b5cf6' strokeWidth='3'/%3E%3Cpath d='M85 50 L115 50' stroke='%238b5cf6' strokeWidth='2'/%3E%3Ccircle cx='100' cy='55' r='2' fill='%238b5cf6'/%3E%3C/g%3E%3C/svg%3E"
    },
    {
        name: "Clinical Lab",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='100' viewBox='0 0 200 100'%3E%3Crect fill='%23f8fafc' width='200' height='100'/%3E%3Cg%3E%3Cpath d='M75 75 L75 40 L100 25 L125 40 L125 75 Z' fill='none' stroke='%233b82f6' strokeWidth='3'/%3E%3Cpath d='M85 55 L100 45 L115 55' fill='none' stroke='%233b82f6' strokeWidth='2.5' strokeLinecap='round'/%3E%3Ccircle cx='100' cy='50' r='2' fill='%233b82f6'/%3E%3Cpath d='M90 65 L110 65' stroke='%233b82f6' strokeWidth='2' strokeLinecap='round'/%3E%3C/g%3E%3C/svg%3E"
    },
];

export default function PartnersSection() {
    return (
        <section className="bg-gray-100 py-12 sm:py-16 md:py-20 mb-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-10 sm:mb-12 md:mb-16">
                    <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                        <span className="bg-gradient-to-r from-purple-400 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                            Trusted Partners
                        </span>
                    </h3>
                    <p className="text-gray-700 text-lg sm:text-xl font-medium md:text-2xl leading-relaxed max-w-2xl mx-auto mt-4">
                        We work with leading healthcare institutions and technology partners
                        to deliver exceptional care
                    </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8">
                    {partners.map((partner, index) => (
                        <div
                            key={index}
                            className="group flex items-center justify-center p-6 bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105 border border-gray-200 hover:border-purple-300/50"
                        >
                            <div className="relative w-full h-20 sm:h-24 md:h-28">
                                <Image
                                    src={partner.image}
                                    alt={partner.name}
                                    fill
                                    className="object-contain transition-opacity duration-300 group-hover:opacity-80"
                                    unoptimized
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
