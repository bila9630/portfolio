import About from "@/components/About"
import { FooterSimple } from "@/components/FooterSimple"
import HeroTitle from "@/components/HeroTitle"
import Project from "@/components/Project"
import { Box } from "@mantine/core"

export default function Home() {
  return (
    <>
      <main>
        <Box sx={{ overflowX: "hidden" }}>
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
        </Box>
      </main>
    </>
  )
}
