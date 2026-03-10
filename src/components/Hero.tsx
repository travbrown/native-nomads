import Image from "next/image";
import { leagueSpartan, dancingScript, dmSans } from "@/lib/fonts";
import GrainOverlay from "@/components/GrainOverlay";

export default function Hero() {
  return (
    <section className="relative h-dvh overflow-hidden">
      <Image
        src="/images/gallery-3.jpg"
        alt="Woman in green field"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/30" />
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 md:px-16 text-center">
        <h1
          className={`${leagueSpartan.className} text-[5rem] md:text-[10rem] lg:text-[13rem] font-bold uppercase leading-[0.85] tracking-tight text-native-white`}
        >
          Native
        </h1>
        <p
          className={`${dancingScript.className} -mt-2 text-[4.5rem] md:text-[9rem] lg:text-[12rem] leading-[0.9] text-native-white`}
        >
          Nomads
        </p>
        <div className="mt-8 md:mt-12">
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
