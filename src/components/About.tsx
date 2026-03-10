import Image from "next/image";
import { dmSans } from "@/lib/fonts";

export default function About() {
  return (
    <section className="bg-[#6b1c1c] text-native-white">
      <div className="py-12 px-6 md:px-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[35%_25%_30%] gap-6 md:gap-8">
          {/* Col 1: Fire art — landscape */}
          <div className="md:pl-8 self-start">
            <Image
              src="/images/service-content.jpg"
              alt="Fire light art at dusk"
              width={640}
              height={420}
              sizes="(max-width: 768px) 100vw, 35vw"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Col 2: Agency intro text — vertically centered */}
          <div className="flex items-center">
            <p
              className={`${dmSans.className} text-xl md:text-2xl text-native-beige leading-relaxed`}
            >
              Native Nomads is a global creative agency and digital connector
              platform.
            </p>
          </div>

          {/* Col 3: B&W ocean portrait (offset lower) + text below */}
          <div className="flex flex-col gap-6 md:mt-24">
            <Image
              src="/images/about-portrait-2.jpg"
              alt="People in the ocean"
              width={641}
              height={799}
              sizes="(max-width: 768px) 100vw, 30vw"
              className="w-full h-auto object-cover"
            />
            <p
              className={`${dmSans.className} text-lg md:text-xl text-native-beige leading-relaxed`}
            >
              We believe movement is medicine — and every journey tells a story
              worth sharing.
            </p>
          </div>
        </div>

        {/* Group 2: Wide landscape image overlapping up + text below */}
        <div className="max-w-6xl mx-auto md:-mt-32 pt-4">
          <div className="md:w-[65%] aspect-[16/7] relative overflow-hidden">
            <Image
              src="/images/community-bg.jpg"
              alt="Man in warm evening light"
              fill
              sizes="(max-width: 768px) 100vw, 65vw"
              className="object-cover object-center"
            />
          </div>
          <p
            className={`${dmSans.className} text-lg md:text-xl text-native-beige leading-relaxed mt-6`}
          >
            We help artists, culture keepers, practitioners, and storytellers
            explore the world while building sustainable income through
            collaborations, experiences, and storytelling.
          </p>
        </div>
      </div>
    </section>
  );
}
