import { Route, Routes } from "react-router";
import { Home } from "./pages/Home/Home";
import { MonthStatistics } from "./pages/MonthStatistics/Components/MonthStatistics";
import { Header } from "./shared/header/header";

import './styles/index.scss';

export default function App() {
  return(
    <div className="container">
      <Header/>
      <Routes>
        <Route path="/" Component={Home}/>
        <Route path="/month-statistics" Component={MonthStatistics} /> 
      </Routes>  
    </div>
  )
}


