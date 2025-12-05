// src/components/Features/Features.jsx
import React from "react";
import FeatureCard from "./Card.jsx";

const features = [
    {
    title: "Artboard",
    description:
        "Draw ideas together using a real-time collaborative whiteboard.",
    image: "https://via.placeholder.com/150x100",
    type: "small",
    },
    {
    title: "Chat",
    description:
        "Send messages, share files, and chat seamlessly in your meetings.",
    image: "https://via.placeholder.com/200x150",
    type: "large",
    },
    {
    title: "Reminder",
    image: "https://via.placeholder.com/200x150",
    type: "large-image-right",
    },
];

const Features = () => {
    return (
    <section className="bg-[#2B2B2B] rounded-xl border border-gray-700 w-[1312px]  mx-auto px-[40px] py-[60px] flex justify-between items-start gap-20">
      {/* 🔹 Left Side Text Section */}
        
<div className="w-full lg:w-[45%] flex flex-col justify-start h-auto space-y-10">
    <div className="flex flex-col gap-3 lg:max-w-[60%]">
            <br/>
        <span className="text-[#FDFDFD] bg-[#171717] px-3 py-1 rounded-md w-fit text-sm font-medium select-none">
            Features
        </span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
            All the Features
            <br/>
            You Need
        </h2>
    </div>

    <div className="mt-100">
        <p className="text-white text-sm leading-relaxed">
        Packed with essential features — from instant meeting launch, 
        smart screen sharing, to collaborative tools that keep your team in 
        sync.
    </p>
    <button className="bg-gray-200 hover:bg-gray-300 text-black px-6 py-2 rounded-md text-sm font-medium transition w-fit mt-6">
        See More
    </button>
    </div>
</div>


      {/* 🔹 Right Side Cards Section */}
        
        <div className="flex-1 flex flex-col gap-4 items-end">
        <div className="">
            {/* 1 card */}
            <FeatureCard {...features[0]} />
            
        </div>
        <div>
            {/* 2 cards */}
            <FeatureCard {...features[1]} />
        </div>
        <div className="self-end">
            {/* 3 card */}
            <FeatureCard {...features[2]} />
        </div>
        </div>
    </section>
    );
};

export default Features;
