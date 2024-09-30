import React, { useState } from "react";

export default function PostBox({ close }) {
  const [media, setMedia] = useState(null);
  const [mediaPreview, setMediaPreview] = useState(null);

  const handleMediaChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setMedia(file);
      const previewUrl = URL.createObjectURL(file);
      setMediaPreview(previewUrl);
    }
  };

  const removeMedia = () => {
    setMedia(null);
    setMediaPreview(null);
  };

  return (
    <section className="post-box-container">
      <div className="post-input-container">
        <div className="post-input-title">
          <h1>Post</h1>
        </div>
        <div className="modalCloseBtn" onClick={() => close(false)}>
          <i className="fa-solid fa-xmark"></i>
        </div>

        <div className="post-input">
          <textarea
            name="postData"
            id="postData"
            placeholder="What's on your mind?"
          ></textarea>
        </div>

        <div className="media-upload">
          <label className="upload-btn" htmlFor="mediaInput">
            <i className="fa-solid fa-photo-film"></i> Add Media
          </label>
          <input
            type="file"
            id="mediaInput"
            style={{ display: "none" }}
            accept="image/*,video/*"
            onChange={handleMediaChange}
          />
          {media && (
            <button className="remove-media-btn" onClick={removeMedia}>
              Remove Media
            </button>
          )}
        </div>

        {mediaPreview && (
          <div className="media-preview">
            {media.type.startsWith("image") ? (
              <img src={mediaPreview} alt="Preview" />
            ) : media.type.startsWith("video") ? (
              <video controls>
                <source src={mediaPreview} type={media.type} />
              </video>
            ) : null}
          </div>
        )}

        <button className="post-submit-btn">Post</button>
      </div>
    </section>
  );
}
