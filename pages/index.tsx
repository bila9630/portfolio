import About from "@/components/About"
import { FooterSimple } from "@/components/FooterSimple"
import Header from "@/components/Header"
import HeroTitle from "@/components/HeroTitle"
import Project from "@/components/Project"

export default function Home() {
  return (
    <>
      <main>
        <HeroTitle />
        <About />
        <Project />
        <FooterSimple links={[
          {
            "link": "/privacy",
            "label": "Privacy policy"
          },
          {
            "link": "/imprint",
            "label": "Imprint"
          }
        ]} />
      </main>
    </>
  )
}
