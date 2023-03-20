import About from "@/components/About"
import HeroTitle from "@/components/HeroTitle"
import Project from "@/components/Project"
import Head from "next/head"


export default function Home() {
  return (
    <>
      <Head>
        <title>Duc Kieu</title>
        <meta name="description" content="Duc's personal website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>✌️</text></svg>" />
      </Head>
      <main>
        <HeroTitle />
        <About />
        <Project />
      </main>
    </>
  )
}
