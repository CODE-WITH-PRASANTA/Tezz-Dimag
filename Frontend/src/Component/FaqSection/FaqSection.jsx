import React, { useState } from "react";
import "./FaqSection.css";

// IMPORT YOUR IMAGE HERE
import faqImage from "../../assets/image-72.webp";

const faqData = [
  {
    question: "Why do we have to go to school?",
    answer:
      "School helps children grow into confident individuals by teaching knowledge, discipline, and social skills. It builds the foundation for a successful future and helps students discover their interests."
  },
  {
    question: "What subjects will I learn in school?",
    answer:
      "Students learn core subjects like Mathematics, Science, English, and Social Studies, along with creative subjects such as Art, Music, and Physical Education to support overall development."
  },
  {
    question: "How long is a school day?",
    answer:
      "A typical school day lasts between 5 to 7 hours depending on the grade level and school schedule, including study time, activities, and breaks."
  },
  {
    question: "How does Tezz Dimag help students learn better?",
    answer:
      "Tezz Dimag focuses on smart learning methods, interactive activities, and concept clarity to make education enjoyable and effective for children."
  },
  {
    question: "Is homework important for students?",
    answer:
      "Homework reinforces what students learn in class and helps them practice independently, improving understanding and confidence."
  },
  {
    question: "How can parents support their child's education?",
    answer:
      "Parents can support learning by creating a positive study environment, encouraging curiosity, and staying involved in their child’s academic journey."
  },
  {
    question: "What makes learning fun for children?",
    answer:
      "Interactive activities, storytelling, games, and real-life examples make learning enjoyable and keep children engaged."
  },
  {
    question: "Why is early education important?",
    answer:
      "Early education builds strong cognitive, emotional, and social skills, preparing children for lifelong learning."
  },
  {
    question: "How does Tezz Dimag improve thinking skills?",
    answer:
      "Tezz Dimag focuses on problem-solving, logical thinking, and creativity to help children think independently."
  },
  {
    question: "Do extracurricular activities matter?",
    answer:
      "Yes, activities like sports, art, and music help develop creativity, teamwork, and confidence."
  },
  {
    question: "What is the role of teachers in student growth?",
    answer:
      "Teachers guide, motivate, and inspire students while helping them understand concepts clearly."
  },
  {
    question: "How can students improve concentration?",
    answer:
      "Regular study routines, breaks, and reducing distractions help improve focus and concentration."
  },
  {
    question: "Why is reading important for children?",
    answer:
      "Reading improves vocabulary, imagination, and understanding, which are essential for academic success."
  },
  {
    question: "How does Tezz Dimag support creativity?",
    answer:
      "Through interactive learning, storytelling, and hands-on activities, Tezz Dimag encourages creative thinking."
  },
  {
    question: "What is active learning?",
    answer:
      "Active learning involves participation, discussions, and practical activities rather than passive listening."
  },
  {
    question: "How can students manage study time effectively?",
    answer:
      "Planning a daily schedule and prioritizing tasks helps students manage time efficiently."
  },
  {
    question: "Why is group learning beneficial?",
    answer:
      "Group learning helps students share ideas, learn teamwork, and understand concepts better."
  },
  {
    question: "How does digital learning help students?",
    answer:
      "Digital tools make learning interactive, accessible, and engaging for modern students."
  },
  {
    question: "What skills do students gain from school?",
    answer:
      "Students gain communication, problem-solving, critical thinking, and social skills."
  },
  {
    question: "How does Tezz Dimag make education stress-free?",
    answer:
      "By focusing on fun-based learning, simple explanations, and student-friendly methods."
  }
];

const ITEMS_PER_PAGE = 4;

const FaqSection = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [openIndex, setOpenIndex] = useState(null);

  const totalPages = Math.ceil(faqData.length / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentFaqs = faqData.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="FaqSection">
      <div className="FaqSection-container">

        {/* LEFT IMAGE */}
        <div className="FaqSection-left">
          <img src={faqImage} alt="Tezz Dimag FAQ" />
        </div>

        {/* RIGHT CONTENT */}
        <div className="FaqSection-right">
          <p className="FaqSection-subtitle">Some FAQ</p>
          <h2 className="FaqSection-title">
            Empowering Children Through Education Playful Mind
          </h2>

          <div className="FaqSection-faqList">
            {currentFaqs.map((faq, index) => (
              <div
                key={index}
                className={`FaqSection-item ${
                  openIndex === index ? "active" : ""
                }`}
              >
                <div
                  className="FaqSection-question"
                  onClick={() => toggleFAQ(index)}
                >
                  <h4>{faq.question}</h4>
                  <span>+</span>
                </div>

                {openIndex === index && (
                  <div className="FaqSection-answer">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* PAGINATION */}
          <div className="FaqSection-pagination">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                className={
                  currentPage === i + 1 ? "active" : ""
                }
                onClick={() => {
                  setCurrentPage(i + 1);
                  setOpenIndex(null);
                }}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;