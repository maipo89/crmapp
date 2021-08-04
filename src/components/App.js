import React, {useState, useEffect} from 'react';
import Body from "./Body"
import Aside from "./Aside"
import contacts from "./data"
import Header from "./Header"
import Footer from "./Footer"
import HeaderMobile from "./HeaderMobile"
import AsideMobile from "./AsideMobile"

function App() {
  const [isDesktop, setDesktop] = useState(window.innerWidth < 1049);
      
  const updateMedia = () => {
      setDesktop(window.innerWidth < 1049);
  };
    
  useEffect(() => {
      window.addEventListener("resize", updateMedia);
      return () => window.removeEventListener("resize", updateMedia);
  });

  return (
    <div>
      { isDesktop ? <HeaderMobile /> : <Header />}
      <div className="body-container">
          <Body contacts={contacts}/>
          {isDesktop ? <AsideMobile /> : <Aside />}
      </div>
      <Footer />
    </div>
  );
}

export default App
