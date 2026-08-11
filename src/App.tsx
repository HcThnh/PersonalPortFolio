import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom"
import Homepage from "./pages/Homepage";
import Profile from "./pages/Profile";
import Skills from "./pages/Skills";
import Project from "./pages/Project";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import { AnimatePresence } from "framer-motion";
import PageTransition from "./components/PageTransition";
import ScrollToTop from "./components/ScrollToTop";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <>
      <ScrollToTop />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PageTransition><Homepage/></PageTransition>}/>
          <Route path="/resume" element={<PageTransition><Profile/></PageTransition>}/>
          <Route path="/skill" element={<PageTransition><Skills/></PageTransition>}/>
          <Route path="/project" element={<PageTransition><Project/></PageTransition>}/>
          <Route path="/contact" element={<PageTransition><Contact/></PageTransition>}/>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AnimatePresence>
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  )
}

export default App
