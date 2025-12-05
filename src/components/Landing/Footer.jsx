// src/components/Footer.jsx
import React from "react";

export default function Footer() {
return (
    <footer className="w-full bg-[#2B2B2B] text-white rounded-xl border border-gray-700">
    <div className="max-w-[1312px] mx-auto px-[40px] py-[60px] flex flex-col gap-[60px]">

        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-10">
        <div className="max-w-lg">
            <h2 className="text-3xl md:text-4xl font-semibold leading-snug">
            <br/>Manage Your Meeting <br /> with <span className="text-white font-bold">SAGE</span>
            </h2>
            <div className="w-full border-t border-gray-600 mt-8"></div>
        </div>

          {/* Right Menus */}
        <div className="flex flex-col sm:flex-row gap-10 text-gray-300 text-base">
            {/* Menu */}
            <div>
            <h3 className="text-white font-semibold mb-4">Menu</h3>
            <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition">About Us</a></li>
                <li><a href="#" className="hover:text-white transition">Features</a></li>
                <li><a href="#" className="hover:text-white transition">Support</a></li>
            </ul>
            </div>
        </div>
        </div>

        {/* Large  BG */}
        <div className="flex justify-center items-center">
        <h1 className="text-[120px] md:text-[180px] font-bold text-gray-700 opacity-20 leading-none select-none">
            SAGE
        </h1>
        </div>
    </div>
    </footer>
);
}
