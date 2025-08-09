import React from 'react';

export default function Home() {
  return (
    <div className="px-4 py-6">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Welcome to CyberShield
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          AI-Powered Educational Cybersecurity Testing Platform
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          {/* Learn Card */}
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <div className="text-blue-600 mb-4">
              <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Learn Security
            </h3>
            <p className="text-gray-600 mb-4">
              Interactive tutorials and AI-powered explanations for cybersecurity concepts
            </p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
              Start Learning
            </button>
          </div>

          {/* Test Card */}
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <div className="text-green-600 mb-4">
              <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Test Security
            </h3>
            <p className="text-gray-600 mb-4">
              Automated vulnerability testing with AI-generated remediation suggestions
            </p>
            <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700">
              Start Testing
            </button>
          </div>

          {/* Community Card */}
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <div className="text-purple-600 mb-4">
              <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Join Community
            </h3>
            <p className="text-gray-600 mb-4">
              Connect with peers, get help from mentors, and share your knowledge
            </p>
            <button className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700">
              Join Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
