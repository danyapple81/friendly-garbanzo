import React, { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
    //const API_KEY = 'EgtQpJRxSUaOSmnr4Hc61zq4ONhIByko';
    const [ categories, setCategories ] = useState(['One punch']);

    const onAddCategory = (NewCategory) => {
      if(categories.includes(NewCategory)) return;
      setCategories([...categories, NewCategory]);
    };

  

    return(
        <>
          <h1>GifExpertApp</h1>
          
          <AddCategory onNewCategory={ onAddCategory }/>
          
            {categories.map( category => (
              <GifGrid key={ category } category={ category } />
            ))
            }
         
        </>
    );
}