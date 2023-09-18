import React from "react";
import "../styles/about.css";

export const About = () => {
  return (
    <section className="about container my-5 py-5">
      <div className="row">
        <div className="col-4">
          <div className="text-center">
            <h3 className="">About me</h3>
          </div>
        </div>
        <div className="col-8">
          <div>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Praesentium neque voluptatibus modi, ratione ea, sint veritatis
              reiciendis, optio deleniti ipsum illum nulla aut mollitia
              laudantium. Saepe quos consectetur nostrum deleniti. Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Dolorem eum
              voluptates, sed iure aliquid exercitationem debitis quaerat in.
              Reprehenderit ducimus doloremque porro, rem tempore at laboriosam
              nesciunt aliquid dignissimos dicta!
            </p>
            <button type="button" className="btn btn-dark p-3 f-2">
              Download Resume
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
