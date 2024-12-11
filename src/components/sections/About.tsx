import React from 'react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-white mb-6">
              About Strai
            </h2>
            <p className="text-gray-400 text-lg mb-6">
              We're on a mission to democratize data analysis through artificial intelligence.
              Our platform makes it easy for businesses of all sizes to harness the power of
              their data and make informed decisions.
            </p>
            <p className="text-gray-400 text-lg">
              Founded in 2024, we've helped thousands of companies transform their data
              into actionable insights. Our team of experts combines deep expertise in AI
              and machine learning with a passion for solving real-world business problems.
            </p>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3"
              alt="Team working"
              className="rounded-xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
