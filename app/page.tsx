
import Intro from '@/components/intro';
import SectionDevider from "@/components/section-devider"
import About from '@/components/about';
import Projects from '@/components/projects';
import Skills from '@/components/skills';

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDevider />
      <About />
      <Projects />
      <Skills />
    </main>
  )
}
