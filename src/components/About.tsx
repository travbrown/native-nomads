import Image from "next/image";
import { dmSans } from "@/lib/fonts";

export default function About() {
  return (
    <section className="bg-native-brown text-native-white">
      {/* Block 1: Agency intro — fire art left, text + woman sitting right */}
      <div className="py-16 px-6 md:px-16">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 max-w-6xl mx-auto">
          <div className="md:w-1/3">
            <Image
              src="/images/service-content.jpg"
              alt="Fire light art at dusk"
              width={640}
              height={800}
              sizes="(max-width: 768px) 100vw, 33vw"
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="md:w-2/3 flex flex-col gap-6">
            <p
              className={`${dmSans.className} text-xl md:text-2xl text-native-beige leading-relaxed max-w-sm`}
            >
              Native Nomads is a global creative agency and digital connector
              platform.
            </p>
            <Image
              src="/images/about-portrait-2.jpg"
              alt="Woman sitting peacefully"
              width={641}
              height={799}
              sizes="(max-width: 768px) 100vw, 45vw"
              className="w-full md:w-3/4 h-auto object-cover self-end"
            />
          </div>
        </div>
      </div>

      {/* Block 2: Movement is medicine — man portrait left, ocean photo + text right */}
      <div className="py-16 px-6 md:px-16">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 max-w-6xl mx-auto">
          <div className="md:w-1/2">
            <Image
              src="/images/community-bg.jpg"
              alt="Man in warm evening light"
              width={800}
              height={640}
              sizes="(max-width: 768px) 100vw, 50vw"
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="md:w-1/2 flex flex-col gap-6 justify-end">
            <p
              className={`${dmSans.className} text-lg md:text-xl text-native-beige leading-relaxed`}
            >
              We believe movement is medicine — and every journey tells a story
              worth sharing.
            </p>
          </div>
        </div>
      </div>

      {/* Block 3: Help artists — portrait left, text right */}
      <div className="py-16 px-6 md:px-16">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 max-w-6xl mx-auto items-center">
          <div className="md:w-1/2">
            <Image
              src="/images/hero-bg.jpg"
              alt="Portrait"
              width={640}
              height={800}
              sizes="(max-width: 768px) 100vw, 50vw"
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="md:w-1/2">
            <p
              className={`${dmSans.className} text-lg md:text-xl text-native-beige leading-relaxed`}
            >
              We help artists, culture keepers, practitioners, and storytellers
              explore the world while building sustainable income through
              collaborations, experiences, and storytelling.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
