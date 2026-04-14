import React from "react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center py-20 px-4 bg-linear-to-b from-gray-50 to-white">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to MyApp</h1>
      <p className="text-lg md:text-2xl text-gray-600 mb-8 max-w-xl">
        This is a demo hero section. Build something amazing with Next.js and Tailwind CSS!
      </p>
      <Link href="/get-started" className="inline-block px-6 py-3 bg-black text-white rounded-lg font-semibold shadow hover:bg-gray-800 transition">Get Started</Link>
    </section>
  );
}
