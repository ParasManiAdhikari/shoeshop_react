import Category from "./Sidebar/Category/Category";
import Navigation from "./Navigation/Nav";
import Products from "./Products/Products";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./Sidebar/Sidebar";
import { useState } from "react";

import products from "./db/data";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null)

  const [query, setQuery] = useState("")

  const handleInputChange = event => {
    setQuery(event.target.value)
  }

  const filteredItems = products.filter((product) =>
  product.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase() !== -1));

  const handleChange = event => {
    setSelectedCategory(event.target.value)
  }

  return (
    <div>
      <Sidebar />
      <Navigation />
      <Recommended />
      <Products />
    </div>
  )
}

export default App;