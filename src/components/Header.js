import React, { useState } from "react";
import Search from "./Search";

function Header({ search, setSearch, onAdd }) {
  const [adding, setAdding] = useState(false)
  const [formData, setFormData] = useState({
    'description': '',
    'image': '',
    'location': ''
  })
  function handleChange(e) {
    const name = e.target.name
    const value = e.target.value
    setFormData({...formData, [name]: value})
  }
  function handleSubmit(e) {
    e.preventDefault()
    onAdd(formData)
    setAdding(false)
  }
  return (
  <>
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search search={search} setSearch={setSearch} />
      {adding ? null : <button onClick={()=>setAdding(true)}>Add Item</button>}
    {adding ? (
      <form onChange={handleChange} onSubmit={handleSubmit} >
        <input name='image' type='text' placeholder="Image URL" ></input>
        <input name='description' type='text' placeholder="Description" ></input>
        <input name="location" type="text" placeholder="Location" ></input>
        <input type="submit"></input>
      </form>) : null
    }
    </header>
  </>
  );
}

export default Header;
