import Link from 'next/link';

interface LogoProps {
  href: string;
  text: string;
}

export default function Logo({ href, text }: LogoProps) {
  return (
    <Link href={href} className="flex items-center gap-2.5 group">
      <div className="w-9 h-9 bg-black rounded-full flex items-center justify-center group-hover:scale-105 transition-transform duration-200 shadow-sm">
        <span className="text-white font-bold text-sm">H</span>
      </div>
      <span className="font-bold text-lg text-gray-900">{text}</span>
    </Link>
  );
}




