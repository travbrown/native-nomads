"use client";

import ParallaxSection from "./ParallaxSection";
import { leagueSpartan, dmSans } from "@/lib/fonts";

export default function YouTube() {
  return (
    <ParallaxSection
      backgroundImage="/images/youtube-bg.jpg"
      overlayOpacity={0.6}
    >
      <div className="flex flex-col items-center justify-center min-h-screen text-center px-6">
        <h2
          className={`${leagueSpartan.className} text-3xl md:text-5xl text-native-white mb-6`}
        >
          📺 Watch Our Journey
        </h2>
        <p
          className={`${dmSans.className} text-lg text-native-beige max-w-2xl mb-8`}
        >
          Follow our adventures across the globe as we connect with creators,
          explore cultures, and build something beautiful together.
        </p>
        <a
          href="https://www.youtube.com/@UC0h7vzxHTVuT_9rpfnc3mAw"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-native-blue hover:bg-native-blue/80 text-native-white px-8 py-3 rounded-full text-lg font-medium transition-colors"
        >
          Visit Our Channel
        </a>
      </div>
    </ParallaxSection>
  );
}
