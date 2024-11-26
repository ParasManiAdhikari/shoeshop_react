import Category from "./Sidebar/Category/Category";
import Navigation from "./Navigation/Nav";
import Products from "./Products/Products";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./Sidebar/Sidebar";
import Card from "./components/Card"
import { useState } from "react";

import products from "./db/data";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [query, setQuery] = useState("")

  // Type input filter
  const handleInputChange = event => {
    setQuery(event.target.value)
  }

  const filteredItemsFromQuery = products.filter((product) =>
    product.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase() !== -1));

  // Category filter
  const handleChange = event => {
    setSelectedCategory(event.target.value)
  }

  const handleClick = event => {
    setSelectedCategory(event.target.value)
  }

  function filteredData(products, selected, query) {
    let filteredProducts = products;
    
    // Filtering Input Items
    if (query) {
      filteredProducts = filteredItemsFromQuery;
    }

    // Applying selected filter
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, company, newPrice, title }) =>
          category === selected ||
          color === selected ||
          company === selected ||
          newPrice === selected ||
          title === selected
      );
    } 

    return filteredProducts.map(
      ({ img, title, star, reviews, prevPrice, newPrice }) => (
        <Card
          key={Math.random()}
          img={img}
          title={title}
          star={star}
          reviews={reviews}
          prevPrice={prevPrice}
          newPrice={newPrice}
        />
      )
    );
  }

  const result = filteredData(products, selectedCategory, query)

  return (
    <div>
      <Sidebar handleChange={handleChange}/>
      <Navigation />
      <Recommended />
      <Products />
    </div>
  )
}

export default App;