const Review = ({ review }) => {
  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <svg
        key={i}
        className={`w-4 h-4 ${i < rating ? 'text-white' : 'text-noir-gray'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))
  }

  return (
    <div className="border-b border-noir-gray pb-6 mb-6 last:border-0 last:pb-0 last:mb-0">
      <div className="flex items-start justify-between mb-2">
        <div>
          <h4 className="font-medium mb-1">{review.name}</h4>
          <div className="flex items-center space-x-2 mb-2">
            {renderStars(review.rating)}
          </div>
        </div>
        <span className="text-xs text-noir-lighter">
          {new Date(review.date).toLocaleDateString()}
        </span>
      </div>
      <p className="text-sm text-noir-lighter leading-relaxed">{review.comment}</p>
    </div>
  )
}

export default Review

