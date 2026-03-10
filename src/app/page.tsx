import Hero from "@/components/Hero";
import About from "@/components/About";
import YouTube from "@/components/YouTube";
import Community from "@/components/Community";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <About />
        <YouTube />
        <Community />
      </main>
      <Footer />
    </>
  );
}
