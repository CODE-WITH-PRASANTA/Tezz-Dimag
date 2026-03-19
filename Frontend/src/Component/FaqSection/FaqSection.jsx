import React, { useState } from "react";
import "./FaqSection.css";

// IMPORT YOUR IMAGE HERE
import faqImage from "../../assets/image-72.webp";

const faqData = [
  {
    question: "What is Tezzdimag Bhubaneswar known for?",
    answer:
      "Tezzdimag Bhubaneswar is known for helping children discover their hidden talents and develop strong mind power, confidence, personality, and future-ready skills through smart and innovative learning programs."
  },
  {
    question: "When was Tezzdimag started?",
    answer:
      "Tezzdimag started its journey in 2019 with a vision to identify every child’s hidden potential and guide them in the right direction through education, skill development, and personality growth."
  },
  {
    question: "What is the mission of Tezzdimag?",
    answer:
      "The mission of Tezzdimag is to prepare every child for the future through Smart Education, Mind Development, Life Skills, confidence building, and modern skill-based learning."
  },
  {
    question: "How does Tezzdimag help children grow?",
    answer:
      "Tezzdimag helps children grow by improving brain development, concentration, communication skills, confidence, creativity, and overall personality through practical and scientific learning methods."
  },
  {
    question: "Why is Abacus training important at Tezzdimag?",
    answer:
      "Abacus training at Tezzdimag improves calculation speed, concentration, memory power, and brain development, helping children become smarter and faster in mathematical thinking."
  },
  {
    question: "How does Vedic Mathematics benefit students?",
    answer:
      "Vedic Mathematics helps students solve math problems faster, easier, and in a smarter way. It improves calculation techniques, logical thinking, and confidence in mathematics."
  },
  {
    question: "What do children learn in Robotics classes?",
    answer:
      "In Robotics classes, children learn technology, innovation, machine concepts, problem-solving, and practical creativity, which helps them understand modern science in an exciting way."
  },
  {
    question: "Why should students learn Artificial Intelligence at Tezzdimag?",
    answer:
      "Artificial Intelligence is the technology of the future. At Tezzdimag, students learn AI basics to develop creative thinking, digital awareness, and future-ready technical skills."
  },
  {
    question: "What is Mind Training and how does it help children?",
    answer:
      "Mind Training helps children improve memory power, concentration, focus, positivity, and mental strength. It supports better academic performance and personal development."
  },
  {
    question: "How does Meditation improve student performance?",
    answer:
      "Meditation helps students stay calm, focused, and mentally balanced. It reduces stress, improves attention, and supports better concentration in studies and daily life."
  },
  {
    question: "How does Public Speaking training build confidence?",
    answer:
      "Public Speaking training helps children speak clearly, express ideas confidently, improve stage presence, and develop strong communication skills for school and future success."
  },
  {
    question: "Why is Personality Development important for children?",
    answer:
      "Personality Development helps children become confident, disciplined, positive, and socially active. It improves behavior, communication, leadership, and self-belief."
  },
  {
    question: "What is the role of Counselling at Tezzdimag?",
    answer:
      "Counselling at Tezzdimag helps children and parents understand the child’s strengths, learning style, interests, and future direction, making growth more focused and effective."
  },
  {
    question: "What is Personality Assessment and why does it matter?",
    answer:
      "Personality Assessment helps identify a child’s abilities, mindset, behavior patterns, and potential. It guides parents and students toward better learning and career planning."
  },
  {
    question: "How does Neuro-Linguistic Programming (NLP) help students?",
    answer:
      "NLP helps students build a positive mindset, better behavior, stronger communication, and self-confidence. It supports emotional growth and success-oriented thinking."
  },
  {
    question: "What is STEM Education at Tezzdimag?",
    answer:
      "STEM Education at Tezzdimag teaches Science, Technology, Engineering, and Mathematics through practical and engaging methods, helping children become innovative and solution-oriented thinkers."
  },
  {
    question: "How does Tezzdimag prepare children for the future?",
    answer:
      "Tezzdimag prepares children for the future by combining education with brain development, communication skills, life skills, confidence building, and modern programs like Robotics and AI."
  },
  {
    question: "Does Tezzdimag focus only on studies?",
    answer:
      "No, Tezzdimag focuses not only on studies but also on mind power, personality development, communication, creativity, confidence, and future skills for complete child growth."
  },
  {
    question: "Why should parents choose Tezzdimag Bhubaneswar?",
    answer:
      "Parents should choose Tezzdimag Bhubaneswar because it provides smart learning, scientific programs, child-focused development, confidence building, and future-ready training under one platform."
  },
  {
    question: "How is Tezzdimag different from regular coaching classes?",
    answer:
      "Tezzdimag is different from regular coaching classes because it goes beyond academics and focuses on brain development, life skills, confidence, modern technology learning, and overall personality growth."
  },

  /* NEW SLIDE 6 */
  {
    question: "Does Tezzdimag help children who forget what they study?",
    answer:
      "Yes, Tezzdimag helps children improve memory, concentration, and recall power through Abacus, Memory Science, Mid Brain Activation, and focus-based learning methods."
  },
  {
    question: "Can Tezzdimag help children who spend too much time on phones?",
    answer:
      "Yes, Tezzdimag engages children in productive learning activities like Robotics, STEM, Abacus, Public Speaking, and creative programs that help reduce screen dependency."
  },
  {
    question: "What if a child is weak in Maths and feels scared of the subject?",
    answer:
      "Tezzdimag supports such children through Vedic Maths, Abacus, and simple concept-based teaching so they can build confidence and become stronger in mathematics."
  },
  {
    question: "Does Tezzdimag help children with study fear or low confidence?",
    answer:
      "Yes, Tezzdimag helps children overcome study fear, improve self-confidence, and build a positive learning attitude through mind training, counselling, and personality development sessions."
  },

  /* NEW SLIDE 7 */
  {
    question: "Can Tezzdimag improve poor handwriting in children?",
    answer:
      "Yes, Tezzdimag offers handwriting and calligraphy support to help children improve neatness, writing style, hand control, and presentation skills."
  },
  {
    question: "How does DMIT help parents understand their child better?",
    answer:
      "DMIT helps parents identify their child’s natural strengths, learning style, talents, and development areas, making it easier to guide them toward the right future path."
  },
  {
    question: "What age group can join Tezzdimag programs?",
    answer:
      "Tezzdimag offers programs for children from around 6 years to 15 years and beyond, with different activities and learning plans based on age and skill level."
  },
  {
    question: "Which special programs are available at Tezzdimag?",
    answer:
      "Tezzdimag offers special programs like Robotics & Coding, STEM Education, Mid Brain Activation, Both Handwriting, Vedic Maths, Abacus, and DMIT for complete child development."
  }
];

const ITEMS_PER_PAGE = 4;

const FaqSection = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [openIndex, setOpenIndex] = useState(null);

  const totalPages = Math.ceil(faqData.length / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentFaqs = faqData.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="FaqSection">
      <div className="FaqSection-container">
        {/* LEFT IMAGE */}
        <div className="FaqSection-left">
          <img src={faqImage} alt="Tezzdimag Bhubaneswar FAQ" />
        </div>

        {/* RIGHT CONTENT */}
        <div className="FaqSection-right">
          <p className="FaqSection-subtitle">Some FAQ</p>
          <h2 className="FaqSection-title">
            Tezzdimag Bhubaneswar – Smart Learning, Mind Power & Future Skills
          </h2>

          <div className="FaqSection-faqList">
            {currentFaqs.map((faq, index) => (
              <div
                key={index}
                className={`FaqSection-item ${openIndex === index ? "active" : ""}`}
              >
                <div
                  className="FaqSection-question"
                  onClick={() => toggleFAQ(index)}
                >
                  <h4>{faq.question}</h4>
                  <span>{openIndex === index ? "-" : "+"}</span>
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
                className={currentPage === i + 1 ? "active" : ""}
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