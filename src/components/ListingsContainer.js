import React, { useState } from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ listings, onDelete }) {
  const [sorted, setSorted] = useState(false)
  const listingCards = listings.map(oneListing=><ListingCard 
    key={oneListing.id}  
    id={oneListing.id} 
    description={oneListing.description} 
    image={oneListing.image}
    location = {oneListing.location}
    onDelete={onDelete} />)
  const sortedList = [...listings].sort(function(a, b){
    const locA=a.location.toLowerCase()
    const locB=b.location.toLowerCase()
    if (locA < locB) {
      return -1
    }
    if (locA > locB) {
      return 1
    }
    return 0
  })
  const sortedCards = sortedList.map(oneListing=><ListingCard 
    key={oneListing.id}  
    id={oneListing.id} 
    description={oneListing.description} 
    image={oneListing.image}
    location = {oneListing.location}
    onDelete={onDelete} />)
  return (
    <main>
      <button onClick={()=>setSorted(!sorted)}> {sorted? 'Sort Chronologically' : 'Sort Location A-Z'} </button>
      <ul className="cards">
        {sorted ? sortedCards : listingCards}
      </ul>
    </main>
  );
}

export default ListingsContainer;
