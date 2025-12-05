import React from "react";

const TestimonialCard = ({ name, role, message, avatar, bg }) => {
  return (
    <div
      className={`${bg} rounded-[12px] p-6 shadow-sm flex flex-col gap-4 transition-transform hover:-translate-y-1 hover:shadow-md`}
    >
      {/* Header */}
      <div className="flex items-center gap-4">
        <img
          src={avatar}
          alt={name}
          className="w-12 h-12 rounded-full border border-gray-200"
        />
        <div>
          <h4 className="font-semibold">{name}</h4>
          <p className="text-sm opacity-70">{role}</p>
        </div>
      </div>
      {/* Message */}
      <p className="text-sm leading-relaxed">{message}</p>
    </div>
  );
};

export default TestimonialCard;
