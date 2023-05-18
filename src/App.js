import "./App.css";
import Header from "./components/Header";
import SideNav from "./components/Sidenav";
import Home from "./components/Home";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <SideNav />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
