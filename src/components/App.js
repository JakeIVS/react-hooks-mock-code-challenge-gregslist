import React, { useEffect, useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings, setListings] = useState([])
  const [search, setSearch] = useState('')
  useEffect(()=>{
    fetch('http://localhost:6001/listings')
    .then(r=>r.json())
    .then(data=>setListings(data))
  }, [])

const filteredResults = listings.filter(listing=>listing.description.toLowerCase().includes(search.toLowerCase()))
  function handleDelete(id) {
    setListings(listings.filter(listing=>listing.id !== id))
    fetch(`http://localhost:6001/listings/${id}`, {
      method: 'DELETE',
      headers:{
        'content-type': 'application/json'
      }
    })
  }
  
  function handleAdd(item) {
    fetch('http://localhost:6001/listings',{
      method: 'POST',
      headers:{
        'Content-type': 'application/json'
      },
      body: JSON.stringify(item)
    })
    .then(r=>r.json())
    .then(data=>setListings([...listings, data]))
  }

  return (
    <div className="app">
      <Header setSearch={setSearch} search={search} onAdd={handleAdd} />
      <ListingsContainer listings={filteredResults} onDelete={handleDelete} />
    </div>
  );
}

export default App;
