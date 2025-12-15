import "./styles/App.css";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import { useEffect, useState } from "react";
import Profile from "./components/Profile";
import Hero from "./components/Hero";
import Separator from "./components/Separator";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { LucideContact, LayoutList, StarsIcon, UserIcon } from "lucide-react";
import Certifications from "./components/Certifications";

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [navAngle, setNavAngle] = useState(0);
  const [hideContent , setHideContent] = useState(false);
  const [navOpen, setNavOpen] = useState(false);
const [profileOpen, setProfileOpen] = useState(false);
const [restoreNav, setRestoreNav] = useState(false);



useEffect(() =>{
  const pages = document.querySelectorAll(".page")

  const observe = () => {
    if(
      pages[0].getBoundingClientRect().top < window.innerHeight /2 && 
    pages[0].getBoundingClientRect().bottom > window.innerHeight/2 )
    {
      setNavAngle(0);
    }

    pages.forEach((target) => {
      if(  
        target.getBoundingClientRect().top < window.innerHeight /2 && 
       target.getBoundingClientRect().bottom > window.innerHeight/2 ){
      if(parseInt(target.getAttribute("data-index"))!==navAngle){
        setNavAngle(parseInt(target.getAttribute("data-index")));
      }
    }
    })
  } 
  window.addEventListener("scroll", observe)
} ,[navAngle])


  return (
    <div className="app flex flex-col items-center justify-start bg-background text-amber-100">
      <div className="bg_blur_i"></div>
      <div className="bg_blur_ii"></div>
      
<Navigation
  navAngle={navAngle}
  setNavAngle={setNavAngle}
  navOpen={navOpen}
  setNavOpen={setNavOpen}
  profileOpen={profileOpen}
/>
      <Header showMenu={showMenu}  setShowMenu={setShowMenu}/>
      
      <main
        data-index={0}
        className="page flex flex-col items-center justify-center flex-1  z-10 min-h-[100dvh] w-full"
      >
    <Profile
  showMenu={showMenu}
  setHideContent={setHideContent}
  profileOpen={profileOpen}
  setProfileOpen={setProfileOpen}
  navOpen={navOpen}
  setNavOpen={setNavOpen}
  restoreNav={restoreNav}
  setRestoreNav={setRestoreNav}
/>

        <Hero hideContent={hideContent} />
      </main>

      <Separator icon={<UserIcon />} />

      <About /> 

       <Separator icon={<StarsIcon />} />

       <Certifications />

       <Separator icon={<LayoutList />} />

       <Projects />


       <Separator icon={<LucideContact />} />

       <Contact />
    </div>
  );
}

export default App;
