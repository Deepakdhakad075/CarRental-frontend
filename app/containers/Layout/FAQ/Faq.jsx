import React, { useState } from 'react';
import Container from '@/components/custom-pages/container';

const faqData = [
  {
    category: 'RESERVATION',
    questions: [
      'How do I book a self-drive car?',
      'Can I modify or cancel my reservation?',
      'Is there a minimum or maximum rental duration?',
      'Are there any hidden charges in the booking process?',
    ],
  },
  {
    category: 'DOCUMENTATION',
    questions: [
      'What documents are required to rent a car?',
      'Is an international driving license accepted?',
      'Do I need to carry physical copies or are digital documents enough?',
      'Can someone else drive the car on my booking?',
    ],
  },
  {
    category: 'OPERATIONS',
    questions: [
      'How do I pick up and drop off the car?',
      'What should I do if the car breaks down during the trip?',
      'Is fuel included in the rental price?',
      'Can I extend my rental period while on the trip?',
    ],
  },
  {
    category: 'INCIDENTS',
    questions: [
      'What happens if I meet with an accident?',
      'Is insurance included with the rental?',
      'Who is liable for traffic fines or tolls?',
      'How do I report damage or theft?',
    ],
  },
  {
    category: 'LEGAL',
    questions: [
      'What are the age restrictions for renting a car?',
      'Are there any location-based driving restrictions?',
      'What is the company’s policy on privacy and data usage?',
      'How is liability handled in case of third-party claims?',
    ],
  },
];

function Faq() {
  const [openCategory, setOpenCategory] = useState(null);

  const toggleCategory = (index) => {
    setOpenCategory(openCategory === index ? null : index);
  };

  return (
    <Container
      variant="white"
      header={
        <>
          <h1 className="text-4xl mt-20 font-bold text-center text-indigo-900 mb-2">
            FAQ's
          </h1>

          <div className="px-4  text-gray-700 text-base leading-relaxed space-y-6 text-left max-w-8xl mt-12 mx-auto">
            {faqData.map((item, index) => (
              <div
                key={index}
                className="border border-gray-300 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => toggleCategory(index)}
                  className="w-full text-left px-4 py-3 bg-indigo-50 hover:bg-indigo-100 font-bold text-indigo-800 flex justify-between items-center"
                >
                  {item.category}
                  <span className="text-xl">
                    {openCategory === index ? '−' : '+'}
                  </span>
                </button>
                {openCategory === index && (
                  <ul className="px-6 py-4 space-y-2 bg-indigo-50 text-gray-700 text-sm">
                    {item.questions.map((q, i) => (
                      <li key={i}>• {q}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </>
      }
    />
  );
}

export default Faq;
