import React, { useState } from "react";

const faqs = [
  {
    question: "What is SAGE?",
    answer:
      "GD-AI is an AI-powered platform designed to assist users with various tasks through advanced machine learning algorithms.",
  },
  {
    question: "Can I use SAGE without installing any software?",
    answer:
      "GD-AI is an AI-powered platform designed to assist users with various tasks through advanced machine learning algorithms.",
  },
  {
    question: "What makes SAGE different from other video conferencing tools?",
    answer:
      "GD-AI is an AI-powered platform designed to assist users with various tasks through advanced machine learning algorithms.",
  },
  {
    question: "Does SAGE work on mobile devices?",
    answer:
      "GD-AI is an AI-powered platform designed to assist users with various tasks through advanced machine learning algorithms.",
  },
  {
    question: "What kind of customer support does SAGE provide?",
    answer:
      "GD-AI is an AI-powered platform designed to assist users with various tasks through advanced machine learning algorithms.",
  },
  {
    question: "Is there a free version of SAGE?",
    answer:
      "GD-AI is an AI-powered platform designed to assist users with various tasks through advanced machine learning algorithms.",
  },
];

const FAQ = () => {
  const [openIdx, setOpenIdx] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIdx(openIdx === index ? null : index);
  };

  return (
    <section className="w-[1312px] mx-auto rounded-xl border border-gray-300 p-[60px] mt-20">
      {/* Heading Section */}
      <div className="text-center mb-12">
        <h1 className="text-blue-600 font-bold mb-2">SAGE</h1>
        <h2 className="text-black text-4xl font-bold">Frequently Asked</h2>
        <h2 className="text-black text-4xl font-bold">Questions</h2>
      </div>

      {/* FAQ List */}
      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border-b border-gray-300 pb-4 cursor-pointer"
            onClick={() => toggleFAQ(index)}
          >
            {/* Question Row */}
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold text-black">{faq.question}</h3>

              <span className="text-xl">
                {openIdx === index ? "−" : "+"}
              </span>
            </div>

            {/* Dropdown Answer */}
            {openIdx === index && (
              <p className="text-gray-600 mt-3">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
