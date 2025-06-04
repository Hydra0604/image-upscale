import React, { useState } from 'react';
import { useUser } from '@clerk/clerk-react';

const Reviews = () => {
  const { user } = useUser();
  const [reviews, setReviews] = useState([
    {
      name: 'Sophia Clark',
      date: '2023-09-15',
      rating: 5,
      comment: 'This service is amazing! It enhanced my old photos beautifully, bringing out details I never noticed before.',
      likes: 12,
      dislikes: 2,
    },
    {
      name: 'John Smith',
      date: '2023-09-14',
      rating: 4,
      comment: 'Great tool for enhancing photos! The AI does a fantastic job with color correction.',
      likes: 8,
      dislikes: 1,
    },
    {
      name: 'Emily Chen',
      date: '2023-09-13',
      rating: 5,
      comment: 'I was skeptical at first, but this service really works! My photos look so much better now.',
      likes: 15,
      dislikes: 0,
    },
  ]);

  const [newReview, setNewReview] = useState({
    rating: 0,
    comment: '',
  });

  const handleRatingChange = (rating) => {
    setNewReview(prev => ({ ...prev, rating }));
  };

  const handleCommentChange = (e) => {
    setNewReview(prev => ({ ...prev, comment: e.target.value }));
  };

  const handleSubmitReview = (e) => {
    e.preventDefault();
    if (!user || !newReview.rating || !newReview.comment.trim()) return;

    const newReviewItem = {
      name: user?.fullName || user?.emailAddresses[0]?.emailAddress,
      date: new Date().toISOString().split('T')[0],
      rating: newReview.rating,
      comment: newReview.comment,
      likes: 0,
      dislikes: 0,
    };

    setReviews(prev => [newReviewItem, ...prev]);
    setNewReview({ rating: 0, comment: '' });
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-8">User Reviews</h2>

      {user && (
        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <h3 className="text-xl font-semibold mb-4">Write a Review</h3>
          <form onSubmit={handleSubmitReview} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Rating</label>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => handleRatingChange(star)}
                    className={`text-2xl p-1 ${newReview.rating >= star ? 'text-yellow-400' : 'text-gray-300'}`}
                  >
                    ★
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Comment</label>
              <textarea
                value={newReview.comment}
                onChange={handleCommentChange}
                className="w-full p-2 border rounded-md"
                rows={4}
                placeholder="Write your review here..."
              />
            </div>
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
            >
              Submit Review
            </button>
          </form>
        </div>
      )}

      <div className="space-y-6">
        {reviews.map((review, index) => (
          <div key={index} className="bg-white rounded-lg shadow p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="font-semibold">{review.name}</h3>
                <p className="text-sm text-gray-500">{review.date}</p>
              </div>
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span key={star} className={`text-2xl ${review.rating >= star ? 'text-yellow-400' : 'text-gray-300'}`}>
                    ★
                  </span>
                ))}
              </div>
            </div>
            <p className="text-gray-600 mb-4">"{review.comment}"</p>
            <div className="flex gap-4">
              <button className="text-sm text-blue-600 hover:text-blue-700">
                Like ({review.likes})
              </button>
              <button className="text-sm text-red-600 hover:text-red-700">
                Dislike ({review.dislikes})
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
