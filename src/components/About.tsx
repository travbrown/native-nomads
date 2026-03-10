"use client";

import Image from "next/image";
import { dancingScript, leagueSpartan, dmSans } from "@/lib/fonts";

export default function About() {
  return (
    <section className="bg-native-brown text-native-white">
      {/* Block 1: Agency intro with two photos */}
      <div className="relative py-16 px-6 md:px-16">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 max-w-6xl mx-auto">
          {/* Left: fire photo */}
          <div className="md:w-1/3">
            <Image
              src="/images/service-content.jpg"
              alt="Fire ceremony"
              width={640}
              height={800}
              sizes="(max-width: 768px) 100vw, 33vw"
              className="w-full h-auto rounded-sm object-cover"
            />
          </div>
          {/* Right: text + woman photo */}
          <div className="md:w-2/3 flex flex-col gap-8">
            <p
              className={`${dmSans.className} text-lg md:text-xl text-native-beige leading-relaxed`}
            >
              Native Nomads is a global creative agency and digital connector
              platform.
            </p>
            <Image
              src="/images/about-portrait-2.jpg"
              alt="Woman sitting peacefully"
              width={641}
              height={799}
              sizes="(max-width: 768px) 100vw, 40vw"
              className="w-full md:w-2/3 h-auto rounded-sm object-cover self-end"
            />
          </div>
        </div>
      </div>

      {/* Block 2: Movement is medicine with two photos */}
      <div className="relative py-16 px-6 md:px-16">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 max-w-6xl mx-auto">
          {/* Left: large landscape */}
          <div className="md:w-1/2">
            <Image
              src="/images/community-bg.jpg"
              alt="Dramatic landscape"
              width={800}
              height={640}
              sizes="(max-width: 768px) 100vw, 50vw"
              className="w-full h-auto rounded-sm object-cover"
            />
          </div>
          {/* Right: ocean photo + text */}
          <div className="md:w-1/2 flex flex-col gap-8 justify-end">
            <Image
              src="/images/about-landscape-2.jpg"
              alt="Ocean scene"
              width={700}
              height={799}
              sizes="(max-width: 768px) 100vw, 50vw"
              className="w-full h-auto rounded-sm object-cover"
            />
            <p
              className={`${dmSans.className} text-lg md:text-xl text-native-beige leading-relaxed`}
            >
              We believe movement is medicine — and every journey tells a story
              worth sharing.
            </p>
          </div>
        </div>
      </div>

      {/* Block 3: Help artists with portrait */}
      <div className="relative py-16 px-6 md:px-16">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 max-w-6xl mx-auto items-center">
          {/* Left: portrait */}
          <div className="md:w-1/2">
            <Image
              src="/images/hero-bg.jpg"
              alt="Portrait"
              width={640}
              height={800}
              sizes="(max-width: 768px) 100vw, 50vw"
              className="w-full h-auto rounded-sm object-cover"
            />
          </div>
          {/* Right: text */}
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
