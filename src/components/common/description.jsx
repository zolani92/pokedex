import React from "react";

const Description = ({ image, title, subtitle, text, children }) => {
  return (
    <div
      className="card border-light text-center"
      style={{
        alignItems: "center"
      }}
    >
      <img
        className="card-img-top"
        src={image.src}
        alt={image.alt}
        style={{
          width: image.width,
          height: image.height
        }}
      />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{subtitle}</h6>
        <p className="card-text">{text}</p>
        {children}
      </div>
    </div>
  );
};

export default Description;
