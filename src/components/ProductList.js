"use client"

import { useState } from "react";

const pageSize = 16;

export default function ProductList({
  products
}) {
  const [activeFilters, setActiveFilters] = useState([]);
  const [page, setPage] = useState(1);
  const tags = products.reduce((acc, p) => {
    p.tags.forEach(t => {
      acc[t] = acc[t] ? acc[t] + 1 : 1;
    });
    return acc;
  }, {});

  function updateActiveFilters(key) {
    if (activeFilters.includes(key)) {
      setActiveFilters(a => a.filter(k => k !== key));
    } else {
      setActiveFilters(a => a.concat([key]));
    }
  }

  const filteredProducts = products.filter(p => {
    return !activeFilters.length || p.tags.some(t => activeFilters.includes(t));
  });
  const numberOfPages = Math.ceil(filteredProducts.length / pageSize);

  const productStart = pageSize * (page - 1);
  const visibleProducts = filteredProducts.slice(productStart, productStart + pageSize);

  return <div className="mainSplit">
      <aside className="productTags">
        <div>
          {Object.entries(tags).map(([key, count]) => <div key={key} className="productCheckbox">
            <input type="checkbox" id={key} onChange={() => updateActiveFilters(key)}/>
            <label for={key}>{key} ({count})</label>
          </div>)}
        </div>
      </aside>

      <main>
        <div className="productList">
          {visibleProducts.map(p => <a href={p.href} className="productItem" key={Math.random()}>
            <img src={p.imgUrl} width="150" height="150" />
            <p>{p.name}</p>
          </a>)}
        </div>

        <div className="productPagination">
          {Array.from({ length: numberOfPages }).map((_, i) => <button
            key={i}
            onClick={() => setPage(i + 1)}
            className={`productPageButton ${page === i + 1 ? 'productPageButtonActive' : ''}`}>{i + 1}</button>)}
        </div>
      </main>
    </div>
}