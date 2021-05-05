import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/SideBar";
import Content from "./components/Content";
function App() {
  return (
    <main>
      <Header />
      <div className="container">
        <Sidebar />
        <div>
          <Content />
          <Footer />
        </div>
      </div>
    </main>
  );
}

export default App;
