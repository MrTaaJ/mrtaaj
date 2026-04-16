import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Cursor from "./components/Cursor";
import Nav from "./components/Nav";
import TransitionOverlay from "./components/TransitionOverlay";
import Home from "./pages/Home";
import Work from "./pages/Work";
import About from "./pages/About";
import { TransitionProvider } from "./hooks/useTransition";

function AppInner() {
  const location = useLocation();

  return (
    <>
      <Cursor />
      <TransitionOverlay />
      <Nav />
      <Routes location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <TransitionProvider>
        <AppInner />
      </TransitionProvider>
    </BrowserRouter>
  );
}
