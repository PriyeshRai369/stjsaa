import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { scrollToTop } from "../../helper/scroll";
import axios from "axios";

export default function Gallery() {
  const [hoveredImage, setHoveredImage] = useState(null);
  const [albums, setAlbums] = useState([])


  const handleMouseEnter = (index) => {
    setHoveredImage(index);
  };

  useEffect(() => {
    async function getAlbum() {
      try {
        const responce = await axios.get("https://www.gdsons.co.in/draft/sjs/get-all-albums");
        setAlbums(responce?.data)

      } catch (error) {
        console.log(error);

      }
    }
    getAlbum()
  }, [])

  return (
    <section className="sectionContainer">
      <div className="container">
        <div className="title">
          <h1>Gallery Album</h1>
        </div>
        <div className="row row-gap-5">
          {
            albums?.map((data) => (
              data?.gallery_files?.length == 3 &&
              (<div className="col-lg-6 col-md-6 col-12" key={data.album_id}>
                <div className="albumContainer">
                  <div className="albumImage">
                    {
                      data?.gallery_files.map((img, index) => (
                        <div
                          className={`albumImageContainer`}
                        >
                          <img src={img} alt="" />
                        </div>

                      ))
                    }
                  </div>
                  <div className="albumTitle">
                    <h4>{data?.album_name}</h4>
                  </div>
                  <div className="viewBtn">
                    <Link to={`album-gallery/${data?.album_id}`}>
                      <button className="view-more-btn" onClick={scrollToTop}>View More</button>
                    </Link>
                  </div>
                </div>
              </div>)
            ))
          }

          <div className="col-lg-6 col-md-6 col-12">
            <div className="albumContainer">
              <div className="albumImage">
                <div
                  className={`albumImageContainer ${hoveredImage === 3 ? "hover" : ""
                    }`}
                  onMouseEnter={() => handleMouseEnter(3)}
                >
                  <img src="/images/party/01.jpeg" alt="" />
                </div>
                <div
                  className={`albumImageContainer ${hoveredImage === 4 ? "hover" : ""
                    }`}
                  onMouseEnter={() => handleMouseEnter(4)}
                >
                  <img src="/images/party/03.jpeg" alt="" />
                </div>
                <div
                  className={`albumImageContainer ${hoveredImage === 5 ? "hover" : ""
                    }`}
                  onMouseEnter={() => handleMouseEnter(5)}
                >
                  <img src="/images/party/agm-election.jpg" alt="" />
                </div>
              </div>
              <div className="albumTitle">
                <h4>AGM Elections Images</h4>
              </div>
              <div className="viewBtn">
                <Link to="agm-election-gallery">
                  <button className="view-more-btn" onClick={scrollToTop}>View More</button>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-md-6 col-12">
            <div className="albumContainer">
              <div className="albumImage">
                <div
                  className={`albumImageContainer ${hoveredImage === 4 ? "hover" : ""
                    }`}
                  onMouseEnter={() => handleMouseEnter(4)}
                >
                  <img src="/images/party/bday/01.jpg" alt="" />
                </div>
                <div
                  className={`albumImageContainer ${hoveredImage === 5 ? "hover" : ""
                    }`}
                  onMouseEnter={() => handleMouseEnter(5)}
                >
                  <img src="/images/party/bday/02.jpg" alt="" />
                </div>
                <div
                  className={`albumImageContainer ${hoveredImage === 6 ? "hover" : ""
                    }`}
                  onMouseEnter={() => handleMouseEnter(6)}
                >
                  <img src="/images/party/bday/03.jpg" alt="" />
                </div>
              </div>
              <div className="albumTitle">
                <h4>Birthday Celebration of XJ Sanjeev Jaipuria</h4>
              </div>
              <div className="viewBtn">
                <Link to="#">
                  <button className="view-more-btn">View More</button>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-md-6 col-12">
            <div className="albumContainer">
              <div className="albumImage">
                <div
                  className={`albumImageContainer ${hoveredImage === 7 ? "hover" : ""
                    }`}
                  onMouseEnter={() => handleMouseEnter(7)}
                >
                  <img src="/images/party/quick-bytes/01.jpeg" alt="" />
                </div>
                <div
                  className={`albumImageContainer ${hoveredImage === 8 ? "hover" : ""
                    }`}
                  onMouseEnter={() => handleMouseEnter(8)}
                >
                  <img src="/images/party/quick-bytes/02.jpeg" alt="" />
                </div>
                <div
                  className={`albumImageContainer ${hoveredImage === 9 ? "hover" : ""
                    }`}
                  onMouseEnter={() => handleMouseEnter(9)}
                >
                  <img src="/images/party/quick-bytes/03.jpg" alt="" />
                </div>
              </div>
              <div className="albumTitle">
                <h4>Grand Opening Of Quick Bytes.</h4>
              </div>
              <div className="viewBtn">
                <Link to="#">
                  <button className="view-more-btn">View More</button>
                </Link>
              </div>
            </div>
          </div>


        </div>
      </div>
    </section>
  );
}
