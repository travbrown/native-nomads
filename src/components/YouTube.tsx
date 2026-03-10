"use client";

import Image from "next/image";
import { leagueSpartan, dmSans, dancingScript } from "@/lib/fonts";

export default function YouTube() {
  return (
    <section className="bg-native-cream py-16 px-6 md:px-16">
      <div className="flex flex-col md:flex-row gap-8 md:gap-16 max-w-6xl mx-auto">
        {/* Left: text content */}
        <div className="md:w-1/2">
          <h2
            className={`${leagueSpartan.className} text-2xl md:text-3xl text-native-brown mb-6 uppercase tracking-wide`}
          >
            📺 🎥 Watch + Follow
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
            className={`${dmSans.className} space-y-2 text-native-brown/80 text-sm md:text-base mb-8 list-disc pl-5`}
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
          >
            look here
          </a>
        </div>
        {/* Right: tree illustration */}
        <div className="md:w-1/2 flex items-center justify-center">
          <Image
            src="/images/logo-alt.png"
            alt="Tree illustration"
            width={798}
            height={472}
            sizes="(max-width: 768px) 100vw, 50vw"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
}
