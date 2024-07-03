import React from "react";

const Gallery = () => {
  const gallery = [
    "/img1.webp",
    "/img2.jpg",
    "/img3.jpg",
    "/img4.jpg",
    "/img7.jpg",
    "/img8.jpg",
    "/img5.jpg",
    "/img6.jpg",
  ];

  return (
    <section className="gallery py-5">
      <div className="container">
        <h1 className="mb-4">BETTER BEATS BEST</h1>
        <div className="row">
          <div className="col-md-4 mb-4">
            {gallery.slice(0, 3).map((element, index) => (
              <img
                key={index}
                src={element}
                alt="galleryImage"
                className="img-fluid rounded shadow-sm"
              />
            ))}
          </div>
          <div className="col-md-4 mb-4">
            {gallery.slice(3, 6).map((element, index) => (
              <img
                key={index}
                src={element}
                alt="galleryImage"
                className="img-fluid rounded shadow-sm"
              />
            ))}
          </div>
          <div className="col-md-4 mb-4">
            {gallery.slice(6, 8).map((element, index) => (
              <img
                key={index}
                src={element}
                alt="galleryImage"
                className="img-fluid rounded shadow-sm"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
