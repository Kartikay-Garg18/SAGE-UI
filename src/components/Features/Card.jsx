// src/components/Features/FeatureCard.jsx
import React from 'react';

const FeatureCard = ({ title, description, image }) => {
return (
    <div className="bg-[#1E1E1E] text-white rounded-xl p-6 border border-gray-700 w-full max-w-sm shadow-sm hover:shadow-md transition">
    <div className="mb-4">
        {image && <img src='https://www.wpbeginner.com/wp-content/uploads/2023/08/google-meet-messages.png' alt={title} className="rounded-lg w-full" />}
    </div>
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    {description && (
        <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
    )}
        </div>
);
};

export default FeatureCard;
