import React, { useEffect, useState } from "react";
import "./Search.css";
import { FaSearch, FaClock } from "react-icons/fa";
import { Link } from "react-router-dom";

import API, { IMAGE_URL } from "../../api/axios";

/* images for courses */
import course1 from "../../assets/Popular1.webp";
import course2 from "../../assets/Popular2.webp";
import course3 from "../../assets/Popular3.webp";

const Search = () => {
  const base = "search-sidebar";

  const [recentPosts, setRecentPosts] = useState([]);

  /* ================= FETCH RECENT BLOGS ================= */

  const fetchRecentBlogs = async () => {
    try {

      const res = await API.get("/blogs/all");

      if (res.data.success) {

        const posts = res.data.data
          .slice(0, 3)
          .map((blog) => ({
            id: blog._id,
            image: `${IMAGE_URL}${blog.image}`,
            title: blog.title,
            date: new Date(blog.createdAt).toLocaleDateString(),
          }));

        setRecentPosts(posts);
      }

    } catch (error) {
      console.log("Recent blog fetch error");
    }
  };

  useEffect(() => {
    fetchRecentBlogs();
  }, []);

  return (
    <aside className={base}>
      {/* SEARCH BOX */}

      <div className={`${base}__card`}>
        <h3 className={`${base}__title`}>Search</h3>

        <div className={`${base}__search-box`}>
          <input type="text" placeholder="Search here..." />

          <button>
            <FaSearch />
          </button>
        </div>
      </div>

      {/* RECENT POSTS */}

      <div className={`${base}__card`}>
        <h3 className={`${base}__title`}>Recent Posts</h3>

        <div className={`${base}__recent`}>

          {recentPosts.map((post) => (

            <Link className="blog-link" to={`/blog/${post.id}`} key={post.id}>

              <div className={`${base}__post`}>

                <img src={post.image} alt="" />

                <div>
                  <span className={`${base}__date`}>
                    <FaClock /> {post.date}
                  </span>

                  <p>
                    {post.title.length > 45
                      ? post.title.slice(0, 45) + "..."
                      : post.title}
                  </p>

                </div>

              </div>

            </Link>

          ))}

        </div>
      </div>

      {/* CATEGORIES */}

      <div className={`${base}__card`}>
        <h3 className={`${base}__title`}>Categories</h3>

        <ul className={`${base}__categories`}>
          <li>College</li>
          <li>High School</li>
          <li>Primary</li>
          <li>University</li>
          <li>Course</li>
        </ul>
      </div>

      {/* POPULAR COURSES */}

      <div className={`${base}__card`}>
        <h3 className={`${base}__title`}>Popular Courses</h3>

        <div className={`${base}__courses`}>
          <div className={`${base}__course`}>
            <img src={course1} alt="" />

            <div>
              <p>The Complete JavaScript Course From Zero...</p>
              <span>Free</span>
            </div>
          </div>

          <div className={`${base}__course`}>
            <img src={course2} alt="" />

            <div>
              <p>High-Quality Online Course Access For...</p>
              <span>Free</span>
            </div>
          </div>

          <div className={`${base}__course`}>
            <img src={course3} alt="" />

            <div>
              <p>Access Premium Content With Online Cou...</p>
              <span>Free</span>
            </div>
          </div>
        </div>
      </div>

      {/* TAGS */}

      <div className={`${base}__card`}>
        <h3 className={`${base}__title`}>Tags</h3>

        <div className={`${base}__tags`}>
          <span>Consulting</span>
          <span>Student</span>
          <span>Course</span>
          <span>Art</span>
          <span>School</span>
          <span>Education</span>
          <span>Learning</span>
          <span>Design</span>
          <span>Online Courses</span>
          <span>UI Design</span>
        </div>
      </div>
    </aside>
  );
};

export default Search;