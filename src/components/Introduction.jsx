import Footer from "./Footer";
import Greet from "./Greeting";
import Header from "./Header";
import Main from "./Main";

const Introduction = () => {
  const myName = "Paras Adhikari"
  const multiply = (a, b) => a * b;

  return (
    <div>
      <Header/>
      <Main />
      <Footer />
      <p>2 * 3 = {2-3}</p>
      <p>My name is {myName}</p>
      <p>My friend list is : {["Alex", "John"]}</p>
    </div>
  )
}

export default Introduction;