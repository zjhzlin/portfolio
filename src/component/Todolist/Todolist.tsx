import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import List from "../List/List";
import Navbar from "../Navbar/Navbar";

function Todolist() {
  return (
    <div>
      <Navbar />
      <h1>To do list</h1>
      <div>
        <Header />
        <List />
        <Footer />
      </div>
    </div>
  );
}

export default Todolist;
