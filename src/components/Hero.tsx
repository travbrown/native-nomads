"use client";

import Image from "next/image";
import { leagueSpartan, dancingScript, dmSans } from "@/lib/fonts";
import GrainOverlay from "./GrainOverlay";

export default function Hero() {
  return (
    <section className="relative h-screen overflow-hidden">
      <Image
        src="/images/gallery-3.jpg"
        alt="Woman in green field"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/30" />
      <div className="relative z-10 flex h-full flex-col justify-center px-6 md:px-16">
        <h1
          className={`${leagueSpartan.className} text-[4rem] md:text-[8rem] lg:text-[10rem] font-bold uppercase leading-[0.85] tracking-tight text-native-white`}
        >
          Native
        </h1>
        <p
          className={`${dancingScript.className} -mt-2 text-[3.5rem] md:text-[7rem] lg:text-[9rem] leading-[0.9] text-native-white`}
        >
          Nomads
        </p>
        <div className="mt-8 md:mt-12 md:self-end md:text-right">
          <p
            className={`${dmSans.className} text-base md:text-lg text-native-beige`}
          >
            Live globally.
          </p>
          <p
            className={`${dmSans.className} text-base md:text-lg text-native-beige`}
          >
            Connect deeply.
          </p>
          <p
            className={`${dmSans.className} text-base md:text-lg text-native-beige`}
          >
            Move with meaning.
          </p>
        </div>
      </div>
      <GrainOverlay />
    </section>
  );
}
