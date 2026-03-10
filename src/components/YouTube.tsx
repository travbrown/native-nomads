import Image from "next/image";
import { bebasNeue, dmSans, dancingScript } from "@/lib/fonts";

export default function YouTube() {
  return (
    <section className="bg-native-cream py-16 px-6 md:px-16 relative overflow-visible">
      {/* Passport stamps decoration */}
      <Image
        src="/images/decoration-1.png"
        alt=""
        width={300}
        height={300}
        className="absolute top-8 right-4 w-40 md:w-64 opacity-60 pointer-events-none"
        aria-hidden="true"
      />

      <div className="flex flex-col md:flex-row gap-8 md:gap-16 max-w-6xl mx-auto">
        {/* Left: text content */}
        <div className="md:w-1/2">
          <h2
            className={`${bebasNeue.className} text-4xl md:text-5xl lg:text-6xl text-native-brown mb-6 uppercase tracking-wide`}
          >
            <span aria-hidden="true">📺 🎥 </span>Watch + Follow
            <br />
            Native Nomads on YouTube
          </h2>
          <p
            className={`${dmSans.className} text-base md:text-lg text-native-brown/80 mb-6 leading-relaxed`}
          >
            We document our travels, creative projects, and conversations with
            nomadic changemakers across the globe.
          </p>
          <ul
            className={`${dmSans.className} space-y-2 text-native-brown/80 text-sm md:text-base mb-4 list-disc pl-5`}
          >
            <li>Culturally-rooted brand partnerships</li>
            <li>Extended stay & artist residency matchmaking</li>
            <li>Curated creative collaborations</li>
            <li>Travel-based storytelling opportunities</li>
            <li>A global community of movement-based entrepreneurs</li>
          </ul>
          <a
            href="https://www.youtube.com/channel/UC0h7vzxHTVuT_9rpfnc3mAw"
            target="_blank"
            rel="noopener noreferrer"
            className={`${dancingScript.className} text-3xl md:text-4xl text-native-brown hover:text-native-blue transition-colors underline decoration-1 underline-offset-4`}
            aria-label="Visit Native Nomads YouTube channel"
          >
            look here
          </a>
        </div>
        {/* Right: tree illustration — overflows into Community section */}
        <div className="md:w-1/2 flex items-start justify-center relative">
          <Image
            src="/images/logo-alt.png"
            alt="Tree illustration"
            width={798}
            height={472}
            sizes="(max-width: 768px) 100vw, 50vw"
            className="w-full h-auto object-contain md:mt-8 relative z-20"
            style={{ marginBottom: "-120px" }}
          />
        </div>
      </div>
    </section>
  );
}
