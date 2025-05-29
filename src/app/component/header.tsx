'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/mission', label: 'Our Mission' },
  { href: '/about', label: 'About Us' },
  { href: '/faq', label: 'FAQ' },
];


export default function Home() {

    const pathname = usePathname();
  return (
    <nav className="flex items-center justify-between px-10 bg-white py-5 sticky top-0 z-50">
        <div className="flex items-center">
          <Image src="/OJPLogo.png" alt="logo" width={200} height={80} />
        </div>

        <div className="flex items-center space-x-8">
          <ul className="flex space-x-6 text-[#133f51] font-semibold">
            {navLinks.map(({ href, label }) => {
              const isActive = pathname === href;
              return (
                <li key={href} className="relative group list-none">
                  <Link href={href} className="font-medium">
                    {label}
                    <span
                      className={`absolute left-0 -bottom-1 h-[3px] transition-all duration-300 ${
                        isActive
                          ? 'w-full bg-[#97b088]'
                    : 'w-0 bg-[#97b088] group-hover:w-full'
                      }`}
                    ></span>
                  </Link>
                </li>
              );
            })}
          </ul>

          <button className="bg-[#133f51] text-white px-5 py-3 rounded">
            REGISTER NOW
          </button>
        </div>
        </nav>
  );
}
