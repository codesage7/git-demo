import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full py-4 px-6 bg-gray-100 border-b border-gray-200 flex items-center justify-between">
      <div className="font-bold text-lg">MyApp</div>
      <ul className="flex gap-6">
        <li><Link href="/" className="hover:underline">Home</Link></li>
        <li><Link href="/about" className="hover:underline">About</Link></li>
        <li><Link href="/contact" className="hover:underline">Contact</Link></li>
      </ul>
    </nav>
  );
}
