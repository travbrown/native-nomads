"use client";

import Image from "next/image";
import { dancingScript, leagueSpartan, dmSans } from "@/lib/fonts";

const services = [
  {
    title: "Branding & Identity",
    image: "/images/service-branding.jpg",
    description:
      "We craft authentic brand identities that resonate across cultures and continents.",
  },
  {
    title: "Content Creation",
    image: "/images/service-content.jpg",
    description:
      "From photography to videography, we capture stories that move people.",
  },
  {
    title: "Social Media",
    image: "/images/service-social.jpg",
    description:
      "Strategic social presence that builds genuine community connections.",
  },
  {
    title: "Digital Strategy",
    image: "/images/service-strategy.jpg",
    description:
      "Data-driven approaches that amplify your reach globally.",
  },
  {
    title: "Community Building",
    image: "/images/service-community.jpg",
    description:
      "Fostering meaningful connections between creators and audiences worldwide.",
  },
];

export default function About() {
  return (
    <section className="bg-native-brown py-20 px-6 md:px-16 text-native-white">
      <h2
        className={`${dancingScript.className} text-4xl md:text-5xl text-center mb-12`}
      >
        Who We Are
      </h2>
      <p
        className={`${dmSans.className} text-lg text-native-beige max-w-2xl mx-auto text-center mb-16`}
      >
        Native Nomads is a global creative agency that blends cultural
        authenticity with modern storytelling. We help brands find their voice
        and connect with audiences across borders.
      </p>
      <div className="space-y-16 max-w-5xl mx-auto">
        {services.map((service, index) => (
          <div
            key={service.title}
            className={`flex flex-col ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            } gap-8 md:gap-12 items-center`}
          >
            <Image
              src={service.image}
              alt={service.title}
              width={500}
              height={400}
              className="rounded-lg object-cover"
            />
            <div>
              <h3
                className={`${leagueSpartan.className} text-2xl mb-3`}
              >
                {service.title}
              </h3>
              <p className={`${dmSans.className} text-native-beige`}>
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
