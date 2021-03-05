import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = ({ defaultCategories = [] }) => {
  //const [categories, setCategories] = useState(['One Punch']);
  const [categories, setCategories] = useState(defaultCategories);

  /* const agregar = (e) => {
    //setCategories(['asd', ...categories]);
		//setCategoria tiene una referencia a categoria en cats
    setCategories((cats) => ['asd', ...cats]);
  }; */

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategories} />
      <hr />
      {/* <button onClick={agregar}>Agregar</button> */}
      <ol>
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </ol>
    </>
  );
};
