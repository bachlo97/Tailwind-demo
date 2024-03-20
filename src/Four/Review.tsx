import { useState } from "react";

export const Review: any = () => {
  const [reviewScore, setReviewScore] = useState(1);
  return (
    <div className="mb-1 space-x-2">
      {[1, 2, 3, 4, 5].map((star, index) => (
        <span
          key={star}
          className={`inline-flex h-12 w-12 cursor-pointer items-center justify-center rounded-md  border border-[#EEF2FF] ${star <= reviewScore ? "text-yellow-500" : "text-gray-400"}`}
          onClick={() => {
            setReviewScore(star);
          }}
        >
          <svg
            width="37"
            height="37"
            viewBox="0 0 37 37"
            fill={star <= reviewScore ? 'yellow': 'none'}
            xmlns="http://www.w3.org/2000/svg"
           
          >
            <g clip-path="url(#clip0_4_28)">
              <path
                d="M18.5 27.3646L8.98482 32.3673L10.8024 21.7714L3.09412 14.2681L13.7316 12.7265L18.4892 3.08642L23.2468 12.7265L33.8843 14.2681L26.1759 21.7714L27.9936 32.3673L18.5 27.3646Z"
                stroke="currentColor"
                stroke-width="2.3125"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_4_28">
                <rect width="37" height="37" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </span>
      ))}
    </div>
  );
};
