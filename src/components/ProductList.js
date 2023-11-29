"use client";

import { useEffect, useState } from "react";

const pageSize = 16;

export default function ProductList({ products, tagItems }) {
  const [activeFilters, setActiveFilters] = useState([]);
  const [openFilters, setOpenFilters] = useState([]);
  const [page, setPage] = useState(1);

  const filteredProducts = products.filter((p) => {
    return (
      !activeFilters.length || p.tags.some((t) => activeFilters.includes(t))
    );
  });
  const numberOfPages = Math.ceil(filteredProducts.length / pageSize);

  const productStart = pageSize * (page - 1);
  const visibleProducts = filteredProducts.slice(
    productStart,
    productStart + pageSize
  );

  function Tag({ tagItems }) {
    return (
      <>
        {Object.entries(tagItems).map(([key, obj], i) => (
          <div key={key} className="tagLevel">
            <TagBox str={key} hasChildren={Object.keys(obj).length} />
            <div className="isClosed">
              {Object.keys(obj).length ? <Tag tagItems={obj} /> : null}
            </div>
          </div>
        ))}
      </>
    );
  }

  function TagBox({ str, hasChildren }) {
    function updateActiveFilters(key) {
      if (activeFilters.includes(key)) {
        setActiveFilters((a) => a.filter((k) => k !== key));
      } else {
        setActiveFilters((a) => a.concat([key]));
      }
    }

    function updateOpenFilters(key) {
      if (openFilters.includes(key)) {
        setOpenFilters((a) => a.filter((k) => k !== key));
      } else {
        setOpenFilters((a) => a.concat([key]));
      }
    }

    return <div className={`tagContainer ${openFilters.includes(str) ? '' : 'tagContainerClosed'}`}>
      <div className="productCheckbox">
        <input
          type="checkbox"
          checked={activeFilters.includes(str)}
          id={str}
          onChange={() => updateActiveFilters(str)}
        />
        <label htmlFor={str}>{str}</label>
      </div>

      {hasChildren ? (
        <button
          onClick={() => updateOpenFilters(str)}
          className="tagToggle"
        >
          {openFilters.includes(str)
            ? "-"
            : "+"}
        </button>
      ) : null}
    </div>
  }

  return (
    <div className="mainSplit">
      <aside className="productTags">
        <Tag tagItems={tagItems} />
      </aside>

      <main>
        <div className="productList">
          {visibleProducts.map((p) => (
            <a href={p.href} className="productItem" key={Math.random()}>
              <img src={p.imgUrl} width="150" height="150" />
              <p>{p.name}</p>
            </a>
          ))}
        </div>

        <div className="productPagination">
          {Array.from({ length: numberOfPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i + 1)}
              className={`productPageButton ${
                page === i + 1 ? "productPageButtonActive" : ""
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </main>
    </div>
  );
}
