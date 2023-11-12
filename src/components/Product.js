"use client";

import { useState } from "react";

export default function Product({ title, images, details, children }) {
  const [activeImage, setActiveImage] = useState(images[0]);

  return (
    <div className="productDetails">
      <div className="pdSplit">
        <div className="pdImages">
          <img
            width="400"
            height="400"
            className="pdActiveImage"
            src={activeImage}
          />
          <div className="pdImageList">
            {images.map((img) => (
              <button
                key={img}
                onClick={() => setActiveImage(img)}
                className="pdImgButton"
              >
                <img
                  src={img}
                  width="80"
                  height="80"
                  className="pdSmallImage"
                />
              </button>
            ))}
          </div>
        </div>

        <div>
          <h1>{title}</h1>
          {details?.length ? (
            <ul>
              {details.map((d) => (
                <li key={d[0]}>
                  <strong>{d[0]}:</strong> {d[1]}
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>

      <div className="pdDescription">{children}</div>
    </div>
  );
}
