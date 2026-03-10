import Image from "next/image";
import { bebasNeue, dmSans } from "@/lib/fonts";

export default function Community() {
  return (
    <section className="relative min-h-dvh overflow-hidden">
      {/* Warm amber gradient background */}
      <Image
        src="/images/youtube-bg.jpg"
        alt=""
        fill
        sizes="100vw"
        className="object-cover"
      />

      {/* Passport stamps decoration */}
      <Image
        src="/images/decoration-2.png"
        alt=""
        width={300}
        height={300}
        className="absolute top-12 right-4 w-40 md:w-56 opacity-50 pointer-events-none z-20"
        aria-hidden="true"
      />

      <div className="relative z-10 flex flex-col md:flex-row min-h-dvh">
        {/* Left: fisheye city photo */}
        <div className="md:w-1/2 relative min-h-[50vh] md:min-h-dvh">
          <Image
            src="/images/about-portrait-1.jpg"
            alt="Looking down over the city"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>

        {/* Right: signup content */}
        <div className="md:w-1/2 flex flex-col justify-center px-8 md:px-16 py-16">
          <h2
            className={`${bebasNeue.className} text-4xl md:text-5xl lg:text-6xl text-native-white mb-8 uppercase tracking-wide leading-tight`}
          >
            <span aria-hidden="true">📥 </span>Join the Native
            <br />
            Nomads Community
          </h2>
          <p
            className={`${dmSans.className} text-lg text-native-white/90 mb-4 font-medium`}
          >
            Sign up to receive:
          </p>
          <div className={`${dmSans.className} space-y-3 mb-10`}>
            <p className="text-native-white/90">
              <span aria-hidden="true">🌍 </span>Global funding + residency
              opportunities
            </p>
            <p className="text-native-white/90">
              <span aria-hidden="true">💼 </span>Collab calls + featured
              projects
            </p>
            <p className="text-native-white/90">
              <span aria-hidden="true">📬 </span>Exclusive YouTube video drops +
              insights
            </p>
          </div>
          <a
            href="https://forms.gle/TcB6cx6fcfrr6YxKA"
            target="_blank"
            rel="noopener noreferrer"
            className={`${bebasNeue.className} inline-block bg-native-white text-native-brown px-8 py-4 rounded-sm text-lg font-medium uppercase tracking-wider hover:bg-native-beige transition-colors text-center`}
          >
            Join Our Email List
          </a>
        </div>
      </div>
    </section>
  );
}
