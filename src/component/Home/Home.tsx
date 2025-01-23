import Navbar from "../Navbar/Navbar";

function Home() {
  return (
    <div>
      <Navbar />
      <h1> Home page </h1>
      <a href="/todolist">To do list</a>
    </div>
  );
}

export default Home;
