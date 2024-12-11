import React from 'react';
import { Quote } from 'lucide-react';

interface TestimonialProps {
  content: string;
  author: string;
  role: string;
}

export default function Testimonial({ content, author, role }: TestimonialProps) {
  return (
    <div className="bg-gray-800/50 p-6 rounded-lg relative">
      <Quote className="w-8 h-8 text-blue-400 opacity-50 absolute -top-4 -left-4" />
      <p className="text-gray-300 mb-4">{content}</p>
      <div>
        <p className="text-white font-semibold">{author}</p>
        <p className="text-gray-400 text-sm">{role}</p>
      </div>
    </div>
  );
}
