import "tailwindcss";
import Nav from './compo/nav'
import Footer from './compo/footer'
import { Outlet } from "react-router-dom";
import './App.css'
import { ThemeProvider, useTheme } from "./context/themecontext";

function App() {

 
  return (
  <>
  <ThemeProvider>

  <Nav/>
  <div className="min-h-[90vh]">
    <Outlet/>
  </div>
  <Footer/>   
  </ThemeProvider>
    </>
  );
}

export default App;
