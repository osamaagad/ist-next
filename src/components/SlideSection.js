"use client"

import { useEffect, useState } from "react";
let index = 0;
let shouldMove = true;
export default function SlideSection({ children, title, isArabic }) {
  useEffect(() => {
    setInterval(() => {
      if (shouldMove) {
        move(1);
      }
    }, 3000);
  }, []);

  function move(step) {
    const slide = document.querySelector('.slide-row');
    const firstSlide = document.querySelector('.slide-row .col-md-4');
    const slides = document.querySelectorAll('.slide-row .col-md-4');
    index = (index + step) >= slides.length ? 0 : (index + step < 0 ? slides.length : index + step);
    slide.scrollTo({
      left: (index * firstSlide.clientWidth) * (isArabic ? -1 : 1),
      behavior: 'auto'
    });
  }

  return (
    <>
      {/* <!-- we_do --> */}
      <div className="we_do" onMouseEnter={() => {shouldMove = false}} onMouseLeave={() => {shouldMove = true}}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="titlepage text_align_center">
                <h2>{title}</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="container-fluid">
                    <div className="carousel-caption we1_do">
                      <div className="row slide-row">{children}</div>
                     <div className="carousel-buttons-container">
                      <button className="carousel-button carousel-button--left" onClick={() => move(-1)}>
                        <i className={`fa ${isArabic ? 'fa-angle-right' : 'fa-angle-left'}`} aria-hidden="true"></i>
                        <span className="sr-only">Previous</span>
                      </button>
                      <button className="carousel-button carousel-button--right" onClick={() => move(1)}>
                        <i className={`fa ${isArabic ? 'fa-angle-left' : 'fa-angle-right'}`} aria-hidden="true"></i>
                        <span className="sr-only">Next</span>
                      </button>
                     </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- end we_do --> */}
    </>
  );
}
