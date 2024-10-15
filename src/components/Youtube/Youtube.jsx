import React from "react";
import { Link } from "react-router-dom";

export default function Youtube() {
  return (
    <section className="sectionContainer">
      <div className="container">
        <div className="title">
          <h1>Glimpse of St. Johns</h1>
        </div>
        <div className="row row-gap-3">
          <div className="col-lg-6 colmd-6 col-12">
            <div className="youtube-video-container">
              <iframe src="https://www.youtube.com/embed/4pjrPc_5JOo?autoplay=1&mute=1&loop=1"></iframe>
            </div>
          </div>
          <div className="col-lg-6 colmd-6 col-12">
            <div className="youtube-video-container">
              <iframe
                width="100%"
                height="345"
                src="https://www.youtube.com/embed/tlyfXRe18Wk?autoplay=1&mute=1&loop=1"
              ></iframe>
            </div>
          </div>
          <div className="col-lg-12">
            <Link
              to="https://www.youtube.com/@sjsaablw/playlists"
              target="_blank"
            >
              <button className="viewMoreBtn mt-4">View More</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
