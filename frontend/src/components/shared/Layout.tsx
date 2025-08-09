'use client';

import React from 'react';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-gray-50">
          {/* Header */}
          <header className="bg-white shadow-sm border-b">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center py-4">
                <div className="flex items-center">
                  <h1 className="text-2xl font-bold text-gray-900">
                    CyberShield
                  </h1>
                  <span className="ml-2 text-sm text-gray-500">
                    Educational Security Platform
                  </span>
                </div>
                <nav className="flex space-x-4">
                  <a href="#" className="text-gray-700 hover:text-gray-900">
                    Dashboard
                  </a>
                  <a href="#" className="text-gray-700 hover:text-gray-900">
                    Learning
                  </a>
                  <a href="#" className="text-gray-700 hover:text-gray-900">
                    Testing
                  </a>
                  <a href="#" className="text-gray-700 hover:text-gray-900">
                    Community
                  </a>
                </nav>
              </div>
            </div>
          </header>

          {/* Main Content */}
          <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
