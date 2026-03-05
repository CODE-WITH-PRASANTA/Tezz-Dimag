import React, { useState } from "react";
import "./OurBlog.css";

import blog1 from "../../assets/Blog-1.webp";
import blog2 from "../../assets/Blog_2.webp";
import blog3 from "../../assets/Blog-3.webp";

import { FaRegCalendarAlt, FaRegCommentDots, FaThumbsUp } from "react-icons/fa";

const OurBlog = () => {

  const [currentPage, setCurrentPage] = useState(0);

  const posts = [
    {
      image: blog1,
      title: "Uncovers Ancient Ashkenaz."
    },
    {
      image: blog2,
      title: "Uncovers Ancient Ashkenaz."
    },
    {
      image: blog3,
      title: "Uncovers Ancient Ashkenaz."
    }
  ];

  const visiblePost = posts[currentPage];

  return (
    <section className="OurBlog-wrapper">

      <div className="OurBlog-header">
        <h2 className="OurBlog-title">Form Our Blog</h2>
        <p className="OurBlog-subtitle">All Latest Post</p>
      </div>

      {/* DESKTOP GRID */}
      <div className="OurBlog-grid OurBlog-desktop">

        {posts.map((post, index) => (

          <div className="OurBlog-card" key={index}>

            <div className="OurBlog-imageBox">
              <img src={post.image} alt="blog" />
            </div>

            <div className="OurBlog-content">

              <h3 className="OurBlog-cardTitle">
                {post.title}
              </h3>

              <p className="OurBlog-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Alias itaque eaque deserunt atque laborum ex ad facilis
                praesentium placeat tenetur.
              </p>

            </div>

            <div className="OurBlog-meta">

              <span>
                <FaRegCalendarAlt />
                10.06.2017
              </span>

              <span>
                <FaRegCommentDots />
                5 Comments
              </span>

              <span>
                <FaThumbsUp />
                5 Like
              </span>

            </div>

          </div>

        ))}

      </div>


      {/* MOBILE VIEW WITH PAGINATION */}
      <div className="OurBlog-mobile">

        <div className="OurBlog-card">

          <div className="OurBlog-imageBox">
            <img src={visiblePost.image} alt="blog" />
          </div>

          <div className="OurBlog-content">

            <h3 className="OurBlog-cardTitle">
              {visiblePost.title}
            </h3>

            <p className="OurBlog-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Alias itaque eaque deserunt atque laborum ex ad facilis
              praesentium placeat tenetur.
            </p>

          </div>

          <div className="OurBlog-meta">

            <span>
              <FaRegCalendarAlt />
              10.06.2017
            </span>

            <span>
              <FaRegCommentDots />
              5 Comments
            </span>

            <span>
              <FaThumbsUp />
              5 Like
            </span>

          </div>

        </div>


        {/* PAGINATION DOTS */}

        <div className="OurBlog-pagination">

          {posts.map((_, index) => (

            <button
              key={index}
              className={`OurBlog-dot ${currentPage === index ? "active" : ""}`}
              onClick={() => setCurrentPage(index)}
            />

          ))}

        </div>

      </div>

    </section>
  );
};

export default OurBlog;