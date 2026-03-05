import React from "react";
import "./HomeParents.css";

import p1 from "../../assets/member-01.webp";
import p2 from "../../assets/member-02.webp";
import p3 from "../../assets/member-03.webp";

const HomeParents = () => {
  return (
    <section className="HomeParents">

      <div className="HomeParents-header">
        <h2>What Parents Say</h2>
        <p>Have a look what say our student's parents about us</p>
      </div>

      <div className="HomeParents-slider">

        <div className="HomeParents-track">

          {[1,2,3,1,2,3].map((item,index)=>(
            <div className="HomeParents-card" key={index}>

              <div className="HomeParents-message">

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua. Ut enim ad minim
                </p>

                <span className="HomeParents-tail"></span>

              </div>

              <div className="HomeParents-user">

                <img
                  src={index%3===0?p1:index%3===1?p2:p3}
                  alt="parent"
                />

                <div>
                  <h4>David Gondar</h4>
                  <span>CEO & Founder</span>
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