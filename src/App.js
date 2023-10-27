import { useState, useEffect } from "react";
import Header from "./Header";
import Hero from "./Hero";
import SiteInfo from "./SiteInfo";
function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="App" >
      <Header windowWidth={windowWidth}/>
      <Hero windowWidth={windowWidth}/>
      <SiteInfo />
    </div>
  );
}

export default App;
