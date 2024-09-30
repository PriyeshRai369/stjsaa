import React, { useEffect, useState } from "react";
import PostBox from "../PostBox/PostBox";

export default function Discussion() {

  const [startPost, setStartPost] = useState(false);

  function handleClick() {
    setStartPost(true); 
  }

  useEffect(() => {
    if (startPost) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [startPost]);

  const postData = {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
    imageUrl: "/images/banner/banner-01.jpg",
    author: "Priyesh Rai",
    role: "A full stack Developer",
  };

  return (
    <div>
      <section className="sectionContainer">
        <div className="container">
          <div className="row">
            <div className="col-lg-2 col-0"></div>
            <div className="col-lg-8 col-md-12 col-12">
              <div className="post-container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="post-information">
                      <div className="row row-gap-1">
                        <div className="col-lg-2 col-3">
                          <div className="user-image-container">
                            <div className="user-img">
                              <img src="/images/userDefault.png" alt="User" />
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-10 col-9">
                          <div className="user-textbox-container">
                            <input
                              type="text"
                              placeholder="Start your post"
                              onClick={handleClick}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row mt-5 row-gap-5">
                  <div className="col-lg-12">
                    <div className="user-post-container">
                      <div className="post-header">
                        <div className="user-img">
                          <img src="/images/userDefault.png" alt="User" />
                        </div>
                        <div className="user-name">
                          <p>{postData.author}</p>
                          <span>{postData.role}</span>
                        </div>
                      </div>
                      <hr />

                      <div className="post-body">
                        <PostContent
                          text={postData.text}
                          imageUrl={postData.imageUrl}
                        />
                      </div>

                      <div className="post-footer">
                        <div className="icon-container">
                          <i className="fa-regular fa-heart"></i>
                        </div>
                        <div className="icon-container">
                          <i className="fa-solid fa-message"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-0"></div>
          </div>
        </div>
      </section>
      {startPost && <PostBox close={setStartPost} />}
    </div>
  );
}

function PostContent({ text, imageUrl }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const words = text.split(" ");
  const shouldTruncate = words.length > 30;
  const truncatedText = shouldTruncate
    ? words.slice(0, 30).join(" ") + "..."
    : text;

  return (
    <div>
      <div className="post-text">
        <p>
          {isExpanded ? text : truncatedText}{" "}
          {shouldTruncate && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="read-more-btn"
            >
              {isExpanded ? "Read less" : "Read more"}
            </button>
          )}
        </p>
      </div>
      {imageUrl && (
        <div className="post-image">
          <img src={imageUrl} alt="Post content" />
        </div>
      )}
    </div>
  );
}
