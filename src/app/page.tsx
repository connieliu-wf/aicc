"use client";

import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-full text-white">
      <h1 className="text-2xl font-bold mb-4">Welcome to Webflow</h1>
      <p className="text-gray-400 mb-6">Start building your application here</p>
      <Link 
        href="/dashboard" 
        className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
      >
        Go to Dashboard
      </Link>
    </div>
  );
}
