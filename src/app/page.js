import Contact from"@/app/components/Contact";
import Amine from "@/app/components/Home";
import About from "@/app/components/About";

export default function Home() {
  return (
    <main className="flex flex-col bg-[#121212]">
        <Amine />
        <About />
        <Contact />
    </main >
  );
}
