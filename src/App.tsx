import { Route, Routes } from "react-router";
import { Home } from "./pages/Home/Home";
import { Header } from "./shared/header/header";
import { Popup } from "./shared/Popup/Popup";

import './styles/index.scss';

export default function App() {
  
  return(
    <>
    <Popup/>
    <div className="container">
      <Header />
      <Routes>
        <Route path="/" Component={Home}/> 
      </Routes>  
    </div>
    </>
  )
}


