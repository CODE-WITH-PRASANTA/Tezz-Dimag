import React, { useEffect, useState } from "react";
import "./BlogDetails.css";

import { useParams } from "react-router-dom";

import BlogDetailsHero from "../../Component/BlogDetailsHero/BlogDetailsHero";
import PhotoSection from "../../Component/Photosection/Photosection";
import Educational from "../../Component/Educational/Educational";
import SendMessage from "../../Component/SendMessage/SendMessage";
import Search from "../../Component/Search/Search";

import API from "../../api/axios";

const BlogDetails = () => {
  const base = "blog-details";

  const { id } = useParams();

  const [blog, setBlog] = useState(null);

  const fetchBlog = async () => {
    try {
      const res = await API.get(`/blogs/${id}`);

      if (res.data.success) {
        setBlog(res.data.data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchBlog();
  }, [id]);

  if (!blog) return null;

  return (
    <section className={base}>
      <BlogDetailsHero title={blog.title} />

      <PhotoSection image={blog.image} />

      <div className={`${base}__container`}>
        <div className={`${base}__left`}>
          <Educational blog={blog} />

          <SendMessage />
        </div>

        <div className={`${base}__right`}>
          <Search />
        </div>
      </div>
    </section>
  );
};

export default BlogDetails;
