import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Intro from "./components/Intro";
import Starfield from "./components/Starfield";
import Hero from "./components/Hero";
import CareerUniverse from "./components/CareerUniverse";
import AssemblyLine from "./components/AssemblyLine";
import ProjectsWorld from "./components/ProjectsWorld";
import Ventures from "./components/Ventures";
import { ToolsGalaxy, KnowledgeGarden, Timeline, Recruiter, Nav } from "./components/Sections";

export default function App() {
  const [entered, setEntered] = useState(false);

  return (
    <>
      <AnimatePresence>
        {!entered && <Intro key="intro" onEnter={() => setEntered(true)} />}
      </AnimatePresence>

      {entered && (
        <motion.div id="top" initial={{ opacity: 0, scale: 1.04 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9 }}>
          <div className="aurora" />
          <Starfield />
          <Nav />
          <Hero />
          <CareerUniverse />
          <AssemblyLine />
          <ProjectsWorld />
          <Ventures />
          <ToolsGalaxy />
          <KnowledgeGarden />
          <Timeline />
          <Recruiter />
        </motion.div>
      )}
    </>
  );
}
