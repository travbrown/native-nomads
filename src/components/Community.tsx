"use client";

import { leagueSpartan, dmSans } from "@/lib/fonts";

export default function Community() {
  return (
    <section className="bg-native-brown py-20 px-6 md:px-16">
      <div className="max-w-2xl mx-auto text-center">
        <h2
          className={`${leagueSpartan.className} text-3xl md:text-5xl text-native-white mb-6`}
        >
          ✉️ Join the Community
        </h2>
        <p
          className={`${dmSans.className} text-lg text-native-beige mb-8`}
        >
          Be part of a global network of creators, travelers, and dreamers.
        </p>
        <ul className="space-y-4 text-left max-w-md mx-auto mb-10">
          <li className="text-native-beige text-base">
            ✦ Exclusive behind-the-scenes content from our global adventures
          </li>
          <li className="text-native-beige text-base">
            ✦ Early access to collaborations and creative opportunities
          </li>
          <li className="text-native-beige text-base">
            ✦ Connect with like-minded nomads and creators worldwide
          </li>
        </ul>
        <a
          href="https://forms.gle/TcB6cx6fcfrr6YxKA"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-native-blue hover:bg-native-blue/80 text-native-white px-8 py-3 rounded-full text-lg font-medium transition-colors"
        >
          Sign Up Now
        </a>
      </div>
    </section>
  );
}
