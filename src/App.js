import "./assets/styles/main.css";
import Header from "./components/headerarea.js";
import Navbar from "./components/navbar";

import { useScrollPosition } from "./components/scrollposition"
import { useState } from 'react'

function App() {
  const [showStickyHeader, setShowStickyHeader] = useState(false)

  useScrollPosition(({ prevPos, currPos }) => {
    const isShow = currPos.y < -400
    console.log(currPos.y, prevPos.y)
    if (isShow !== showStickyHeader) {
      setShowStickyHeader(isShow)
    }
  }, [showStickyHeader])

  return (
    <div className="app-container">
      
      <Navbar show={showStickyHeader}/>
      <Header />
    </div>
  );
}

export default App;
