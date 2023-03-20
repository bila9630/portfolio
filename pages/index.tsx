import About from "@/components/About"
import HeroTitle from "@/components/HeroTitle"
import Project from "@/components/Project"
import Head from "next/head"


export default function Home() {
  return (
    <>
      <Head>
        <title>Duc Kieu</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <HeroTitle />
        <About />
        <Project />

      </main>
    </>
  )
}
