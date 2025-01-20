import "./App.css";
import Menu from "./component/Menu";
import Header from "./component/Header/Header";
import List from "./component/List/List";
import Footer from "./component/Footer/Footer";

function App() {
  // const projects = [
  //   { name: "Project 1", description: "This is the first project." },
  //   { name: "Project 2", description: "This is the second project." },
  //   { name: "Portfolio", description: "Your portfolio site." },
  // ];

  return (
    <>
      <h1>To do list</h1>

      <div>
        <Header />
        <List />
        <Footer />
      </div>
      {/* <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <Menu projects={projects} />
      </div> */}
    </>
  );
}

export default App;
