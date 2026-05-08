import React from 'react'

function Browser() {

    const category = document.getElementById("All").value;
    const filter = document.getElementById("All level").value;

    alert("Search: " + search +" | All: " + All + " | All level: " + All);

  return (
        <div>
        <h1>Browser skill</h1>
        <div>
        <input type="text" placeholder='Search' />
        <select id="Duration" className="px-3 py-2 bg-gray-100">
          <option>1 Month</option>
          <option>2 Month</option>
          <option>3 Month</option>
          <option>4 Month</option>
          <option>5 Month</option>
        </select>
        <select id="filter" className="px-3 py-2 bg-gray-100">
          <option>Filter</option>
          <option>Low to High</option>
          <option>High to low</option>
          <option>Newest</option>
        </select>

        </div>
        </div>
  )
}

export default Browser