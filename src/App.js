import Navbar from "./components/Navbar";
import Socials from "./components/Socials";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";


function App() {
  return (
    <div>
      <Navbar/>
      <Socials/>
      {/* <div className="h-screen w-screen snap-y snap-mandatory overflow-scroll"> */}
      <div className="w-screen overflow-x-hidden">
        <div className="h-screen w-screen snap-start"><Home/></div>
        <div className="h-screen w-screen snap-start"><Skills/></div>
        <div className="h-screen w-screen snap-start"><Projects/></div>
        <div className="h-screen w-screen snap-start"><Experience/></div>
      </div>
    </div>
  );
}

export default App;
