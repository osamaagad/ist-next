"use client"

import { useState } from "react";

export default function ProductList({
  products
}) {
  const [activeFilters, setActiveFilters] = useState([]);
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

  return <div className="mainSplit">
      <aside className="productTags">
        <div>
          {Object.entries(tags).map(([key, count]) => <div key={key} className="productCheckbox">
            <input type="checkbox" id={key} onChange={() => updateActiveFilters(key)}/>
            <label for={key}>{key} ({count})</label>
          </div>)}
        </div>
      </aside>
      <main className="productList">
        {filteredProducts.map(p => <div className="productItem">
          <img src={p.imgUrl} width="150" height="150" />
          <p>{p.name}</p>
        </div>)}
      </main>
    </div>
}