import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import "./App.css";

export default function App() {
  return (
    <div className="app-container">
      <Header />

      <div className="app-content">
        <Sidebar />
        <main className="app-main">
          <Home />
        </main>
      </div>

      <Footer />
    </div>
  );
}
