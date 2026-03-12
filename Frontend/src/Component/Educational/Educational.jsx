import React, { useEffect, useState } from "react";
import "./Educational.css";
import API from "../../api/axios";

const Educational = ({ blog }) => {

  const base = "educational-page";

  const [messages,setMessages] = useState([]);

  /* ================= FETCH BLOG MESSAGES ================= */

  const fetchMessages = async () => {

    try{

      const res = await API.get(`/messages/blog/${blog._id}`);

      if(res.data.success){
        setMessages(res.data.data);
      }

    }catch(err){
      console.log("message fetch error");
    }

  };

  useEffect(()=>{

    if(blog?._id){
      fetchMessages();
    }

  },[blog]);

  return (
    <section className={base}>
      <div className={`${base}__container`}>

        {/* BLOG TITLE */}
        <h1 className={`${base}__title`}>
          {blog.title}
        </h1>

        {/* BLOG CONTENT */}
        <p
          className={`${base}__text`}
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />

        {/* ================= MESSAGES SECTION ================= */}

        <h2 className={`${base}__section-title`}>
          Messages
        </h2>

        {messages.length === 0 ? (

          <p>No messages yet.</p>

        ) : (

          messages.map((msg) => (

            <div className={`${base}__comment`} key={msg._id}>

              <div>

                <h4>{msg.name}</h4>

                <span>
                  {new Date(msg.createdAt).toLocaleDateString()}
                </span>

                <p>
                  {msg.message}
                </p>

              </div>

            </div>

          ))

        )}

      </div>
    </section>
  );
};

export default Educational;