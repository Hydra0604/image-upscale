import React from 'react';
import { FaThumbsUp, FaCommentAlt } from 'react-icons/fa';

const testimonials = [
  {
    name: 'Sophia Clark',
    date: '2023-09-15',
    stars: 5,
    message: 'This service is amazing! It enhanced my old photos beautifully, bringing out details I never noticed before.',
    likes: 12,
    comments: 2,
    image: '/avatars/sophia.png',
  },
  {
    name: 'Ethan Miller',
    date: '2023-08-22',
    stars: 4,
    message: 'I\'m impressed with the results. The AI enhancement is subtle yet effective, making my images look more professional.',
    likes: 8,
    comments: 1,
    image: '/avatars/ethan.png',
  },
  {
    name: 'Olivia Davis',
    date: '2023-07-10',
    stars: 5,
    message: 'The image enhancement is top-notch. It\'s easy to use and the results are fantastic. Highly recommend!',
    likes: 15,
    comments: 3,
    image: '/avatars/olivia.png',
  },
];

const Testimonials = () => {
  return (
    <section className="py-12 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold text-gray-800 mb-8">Customer Testimonials</h2>

        <div className="space-y-6">
          {testimonials.map((t, index) => (
            <div key={index} className="border border-blue-200 p-4 rounded-lg shadow-sm">
              <div className="flex items-center mb-2 space-x-3">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-medium text-gray-900">{t.name}</h4>
                  <p className="text-sm text-gray-500">{t.date}</p>
                </div>
              </div>

              <div className="flex items-center text-blue-500 mb-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i}>
                    {i < t.stars ? '★' : '☆'}
                  </span>
                ))}
              </div>

              <p className="text-gray-700 mb-3">"{t.message}"</p>

              <div className="flex items-center space-x-6 text-sm text-gray-600">
                <div className="flex items-center space-x-1">
                  <FaThumbsUp className="text-gray-500" />
                  <span>{t.likes}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <FaCommentAlt className="text-gray-500" />
                  <span>{t.comments}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
