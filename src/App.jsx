import Category from "./Sidebar/Category/Category";
import Navigation from "./Navigation/Nav";
import Products from "./Products/Products";
import Recommended from "./Recommended/Recommended";
import Price from "./Sidebar/Price/Price";
import Colors from "./Sidebar/Colors/Colors";

function App(){

  return (
    <div>
      <Navigation/>
      <Products />
      <Recommended />
      <Category />
      <Price />
      <Colors />
    </div>
  )
}

export default App;