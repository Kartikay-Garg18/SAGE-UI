import React from 'react';
import Card from './Card.jsx';

const testimonials = [
{
    name: "Kartikay Garg",
    role: "Frontend",
    message:
    "We tried other tools such as Boom, Gologolo Meet, etc. There is nothing as good as meetLine yet!",
    avatar:
    "https://static.vecteezy.com/system/resources/previews/024/183/502/original/male-avatar-portrait-of-a-young-man-with-a-beard-illustration-of-male-character-in-modern-color-style-vector.jpg",
    bg: "bg-white",
},
{
    name: "Rishabh Saraswat",
    role: "Backend",
    message:
    "We tried other tools such as Boom, Gologolo Meet, etc. There is nothing as good as meetLine yet!",
    avatar:
    "https://static.vecteezy.com/system/resources/previews/024/183/535/original/male-avatar-portrait-of-a-young-man-with-glasses-illustration-of-male-character-in-modern-color-style-vector.jpg",
    bg: "bg-white",
},
{
    name: "Harshul Sengar",
    role: "Backend",
    message:
    "We tried other tools such as Boom, Gologolo Meet, etc. There is nothing as good as meetLine yet!",
    avatar:
    "https://static.vecteezy.com/system/resources/previews/024/183/541/non_2x/female-avatar-blonde-woman-portrait-illustration-of-a-female-character-in-a-modern-color-style-vector.jpg",
    bg: "bg-white",
},
{
    name: "Tarun",
    role: "DataBase",
    message:
    "We tried other tools such as Boom, Gologolo Meet, etc. There is nothing as good as meetLine yet!",
    avatar:
    "https://img.freepik.com/premium-vector/man-character_665280-46970.jpg",
    bg: "bg-white",
},
{
    name: "Madhav Goyal",
    role: "Backend",
    message:
    "We tried other tools such as Boom, Gologolo Meet, etc. There is nothing as good as meetLine yet!",
    avatar:
    "https://static.vecteezy.com/system/resources/previews/024/183/525/non_2x/avatar-of-a-man-portrait-of-a-young-guy-illustration-of-male-character-in-modern-color-style-vector.jpg",
    bg: "bg-white",
},
{
    name: "Khushi Goyal",
    role: "Frontend",
    message:
    "We tried other tools such as Boom, Gologolo Meet, etc. There is nothing as good as meetLine yet!",
    avatar:
    "https://th.bing.com/th/id/OIP.x39arGbkxD-ESLLknWMBDwHaHa?w=176&h=180&c=7&r=0&o=7&cb=12&pid=1.7&rm=3",
    bg: "bg-white",
},
];





const Testimonials = () => {
return (
    <section className="px-4 sm:px-6 md:px-10 lg:px-[40px] py-10 sm:py-12 md:py-16 lg:py-[60px] bg-[#F9FAFB] rounded-[12px] max-w-[1312px] mx-auto">
    <div className="flex flex-col lg:flex-row items-start justify-between gap-6">
        {/* Left Side */}
        <div className="flex flex-col gap-3 lg:max-w-[60%]">
            <br/>
        <span className="text-[#2563EB] bg-[#E0EDFF] px-3 py-1 rounded-md w-fit text-sm font-medium select-none">
            Testimonials
        </span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
            What People Are 
            <br/>
            Saying
        </h2>
        </div>

        {/* Right Side */}
        <div className="mt-4 lg:mt-10">
        <p className="text-gray-500 max-w-lg text-sm leading-relaxed mb-4">
            From setup to execution, SAGE delivers — here's what people are
            saying after switching from other platforms they used before.
        </p>
        <div className="flex justify-start lg:justify-end">
            <button className="bg-[#E5E7EB] hover:bg-[#d8dadf] text-gray-800 px-5 py-2 rounded-md text-sm font-medium transition">
            See More
            </button>
        </div>
        </div>
    </div>

      {/* Card Section */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {testimonials.map((t, i) => (
        <Card key={i} {...t} />
        ))}
    </div>
    </section>
);
};

export default Testimonials;
