import React, { useEffect, useState } from "react";
import "./HomeParents.css";

import API, { IMAGE_URL } from "../../api/axios";

const HomeParents = () => {

  const [testimonials,setTestimonials] = useState([])

  /* ================= FETCH TESTIMONIALS ================= */

  const fetchTestimonials = async () => {

    try{

      const res = await API.get("/testimonials/all")

      if(res.data.success){

        const data = res.data.data.map(item => ({
          ...item,
          image:`${IMAGE_URL}${item.image}`
        }))

        setTestimonials(data)

      }

    }catch(error){

      console.error("Failed to load testimonials")

    }

  }

  useEffect(()=>{
    fetchTestimonials()
  },[])

  if(testimonials.length === 0) return null

  return (
    <section className="HomeParents">

      <div className="HomeParents-header">
        <h2>What Parents Say</h2>
        <p>Have a look what say our student's parents about us</p>
      </div>

      <div className="HomeParents-slider">

        <div className="HomeParents-track">

          {[...testimonials,...testimonials].map((item,index)=>(
            <div className="HomeParents-card" key={index}>

              <div className="HomeParents-message">

                <p>
                  {item.feedback}
                </p>

                <span className="HomeParents-tail"></span>

              </div>

              <div className="HomeParents-user">

                <img
                  src={item.image}
                  alt={item.name}
                />

                <div>
                  <h4>{item.name}</h4>
                  <span>{item.designation}</span>
                </div>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default HomeParents;