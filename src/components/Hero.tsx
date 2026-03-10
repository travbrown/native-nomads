"use client";

import Image from "next/image";
import { leagueSpartan, dancingScript, dmSans } from "@/lib/fonts";
import GrainOverlay from "./GrainOverlay";

export default function Hero() {
  return (
    <section className="relative h-screen">
      <Image
        src="/images/hero-bg.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 flex h-full items-center justify-center">
        <div className="text-center">
          <p
            className={`${leagueSpartan.className} text-lg uppercase tracking-[0.3em] text-native-beige`}
          >
            NATIVE
          </p>
          <h1
            className={`${dancingScript.className} text-7xl md:text-9xl text-native-white`}
          >
            Nomads
          </h1>
          <p
            className={`${dmSans.className} mt-4 text-lg text-native-beige`}
          >
            Live Globally. Connect Deeply.
          </p>
        </div>
      </div>
      <GrainOverlay />
    </section>
  );
}
