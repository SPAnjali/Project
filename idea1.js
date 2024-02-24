import React, { useState } from 'react';

const SearchForm = () => {
  const [color, setColor] = useState('');
  const [size, setSize] = useState('');
  const [category, setCategory] = useState('');

  const handleColorChange = (e) => {
    setColor(e.target.value);
  };

  const handleSizeChange = (e) => {
    setSize(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   
    console.log('Color:', color, 'Size:', size, 'Category:', category);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Color:
        <input type="text" value={color} onChange={handleColorChange} />
      </label>
      <label>
        Size:
        <input type="text" value={size} onChange={handleSizeChange} />
      </label>
      <label>
        Category:
        <input type="text" value={category} onChange={handleCategoryChange} />
      </label>
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;