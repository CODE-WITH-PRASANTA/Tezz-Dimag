import React, { useState, useEffect } from "react";
import "./OurBlog.css";

import { FaRegCalendarAlt, FaRegCommentDots, FaThumbsUp } from "react-icons/fa";
import { Link } from "react-router-dom";

import API, { IMAGE_URL } from "../../api/axios";

const OurBlog = () => {

  const [currentPage, setCurrentPage] = useState(0);
  const [posts, setPosts] = useState([]);

  /* ================= FETCH BLOGS ================= */

  const fetchBlogs = async () => {

    try {

      const res = await API.get("/blogs/all");

      if (res.data.success) {

        const blogs = res.data.data.map((blog) => ({

          id: blog._id,
          image: `${IMAGE_URL}${blog.image}`,
          title: blog.title,
          description: blog.content?.replace(/<[^>]+>/g, "").slice(0,120),
          date: new Date(blog.createdAt).toLocaleDateString(),
          comments: blog.comments || 0,
          likes: blog.likes || 0

        }));

        setPosts(blogs);

      }

    } catch (error) {

      console.log("Blog fetch error");

    }

  };

  useEffect(() => {

    fetchBlogs();

  }, []);

  const visiblePost = posts[currentPage] || {};

  return (
    <section className="OurBlog-wrapper">

      <div className="OurBlog-header">
        <h2 className="OurBlog-title">Form Our Blog</h2>
        <p className="OurBlog-subtitle">All Latest Post</p>
      </div>

      {/* DESKTOP GRID */}
      <div className="OurBlog-grid OurBlog-desktop">

        {posts.map((post, index) => (

          <Link to={`/blog/${post.id}`} key={index} className="blog-link">

            <div className="OurBlog-card">

              <div className="OurBlog-imageBox">
                <img src={post.image} alt="blog" />
              </div>

              <div className="OurBlog-content">

                <h3 className="OurBlog-cardTitle">
                  {post.title}
                </h3>

                <p className="OurBlog-description">
                  {post.description}
                </p>

              </div>

              <div className="OurBlog-meta">

                <span>
                  <FaRegCalendarAlt />
                  {post.date}
                </span>

                <span>
                  <FaRegCommentDots />
                  {post.comments} Comments
                </span>

                <span>
                  <FaThumbsUp />
                  {post.likes} Like
                </span>

              </div>

            </div>

          </Link>

        ))}

      </div>


      {/* MOBILE VIEW WITH PAGINATION */}
      <div className="OurBlog-mobile">

        <Link to={`/blog/${visiblePost.id}`}>

          <div className="OurBlog-card">

            <div className="OurBlog-imageBox">
              <img src={visiblePost.image} alt="blog" />
            </div>

            <div className="OurBlog-content">

              <h3 className="OurBlog-cardTitle">
                {visiblePost.title}
              </h3>

              <p className="OurBlog-description">
                {visiblePost.description}
              </p>

            </div>

            <div className="OurBlog-meta">

              <span>
                <FaRegCalendarAlt />
                {visiblePost.date}
              </span>

              <span>
                <FaRegCommentDots />
                {visiblePost.comments} Comments
              </span>

              <span>
                <FaThumbsUp />
                {visiblePost.likes} Like
              </span>

            </div>

          </div>

        </Link>


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