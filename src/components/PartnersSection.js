"use client"

import { useEffect, useState } from "react";

export default function PartnersSection({ isArabic, logos }) {
  const [pageLength, setPageLength] = useState(5);
  const numberOfPages = Math.floor(logos.length / pageLength);
  const [page, setPage] = useState(0);
  const [selectedLogo, setSelectedLogo] = useState();

  useEffect(() => {
    if (document.documentElement.clientWidth < 500) {
      setPageLength(1);
    } else if (document.documentElement.clientWidth <= 1000) {
      setPageLength(Math.floor(document.documentElement.clientWidth / 200));
    }
  }, [])

  return (
    <div className="partnerSection">
      {selectedLogo ? <div className="fixed" onClick={() => setSelectedLogo()}></div> : null}
      <button
        className={`carousel-button carousel-button--left ${page === 0 ? 'button-disabled' : null}`}
        onClick={() => page <= 0 ? null : setPage(p => p - 1)}
      >
        <i
          className={`fa ${isArabic ? "fa-angle-right" : "fa-angle-left"}`}
          aria-hidden="true"
        ></i>
        <span className="sr-only">Previous</span>
      </button>
      <div className="partnerLogos">
        {logos.filter(logo => !selectedLogo || selectedLogo.src === logo.src).slice(selectedLogo ? 0 : page, page + pageLength).map((logo) => (
          <button key={logo.src} className="logo-item" onClick={() => selectedLogo ? setSelectedLogo(undefined): setSelectedLogo(logo)}>
          <img src={logo.src} alt="#" className="logo-img" width="140" height="140" />
      
          <p className={selectedLogo ? 'show-text' : ''}>
            {logo.text}
          </p>
        </button>
        ))}
      </div>
      <button
        className={`carousel-button carousel-button--right ${page === numberOfPages ? 'button-disabled' : null}`}
        onClick={() => page >= numberOfPages ? null : setPage(p => p + 1)}
      >
        <i
          className={`fa ${isArabic ? "fa-angle-left" : "fa-angle-right"}`}
          aria-hidden="true"
        ></i>
        <span className="sr-only">Next</span>
      </button>
    </div>
  );
}
