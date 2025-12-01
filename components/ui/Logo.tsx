import Link from 'next/link';

interface LogoProps {
  href: string;
  text: string;
}

export default function Logo({ href, text }: LogoProps) {
  return (
    <Link href={href} className="flex items-center gap-0.5 group flex-col">
      <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center group-hover:scale-105 transition-transform duration-200 shadow-sm">
        <span className="text-white font-bold text-sm">H</span>
      </div>
      {/* <span className="font-bold text-lg text-gray-900">{text}</span> */}
    </Link>
  );
}




