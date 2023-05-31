import React, { useState } from "react";

function ListingCard(card) {
  const [isFavorite, setIsFavorite] = useState(false)
  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={card.image} alt={card.description} />
      </div>
      <div className="details">
        {isFavorite ? (
          <button className="emoji-button favorite active" onClick={()=>setIsFavorite(false)} >★</button>
        ) : (
          <button className="emoji-button favorite" onClick={setIsFavorite(true)} >☆</button>
        )}
        <strong>{card.description}</strong>
        <span> · {card.location}</span>
        <button className="emoji-button delete" onClick={()=>card.onDelete(card.id)} >🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
