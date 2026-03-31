import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";
import dynamic from "next/dynamic";

const DynamicGrid = dynamic(() => import("@/components/Grid"));
const DynamicRecentProjects = dynamic(() => import("@/components/RecentProjects"));
const DynamicClients = dynamic(() => import("@/components/Clients"));
const DynamicExperience = dynamic(() => import("@/components/Experience"));
const DynamicApproach = dynamic(() => import("@/components/Approach"));
const DynamicFooter = dynamic(() => import("@/components/Footer"));


const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center 
    items-center flex-col mx-auto sm:px-10 overflow-clip">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <DynamicGrid />
        <DynamicRecentProjects />
        <DynamicClients />
        <DynamicExperience />
        <DynamicApproach />
        <DynamicFooter />

      </div>
      </main>
  );
}

export default Home
