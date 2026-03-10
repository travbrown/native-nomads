"use client";

import { dmSans } from "@/lib/fonts";

export default function Footer() {
  return (
    <footer
      className={`${dmSans.className} bg-native-brown border-t border-native-beige/20 py-8 px-6 text-center`}
    >
      <div className="flex justify-center gap-6 mb-4">
        <a
          href="https://www.instagram.com/nativenomads_earth"
          target="_blank"
          rel="noopener noreferrer"
          className="text-native-beige hover:text-native-white transition-colors"
        >
          Instagram
        </a>
        <a
          href="https://www.youtube.com/@UC0h7vzxHTVuT_9rpfnc3mAw"
          target="_blank"
          rel="noopener noreferrer"
          className="text-native-beige hover:text-native-white transition-colors"
        >
          YouTube
        </a>
      </div>
      <p className="text-native-beige/60 text-sm">
        © 2026 Native Nomads. All rights reserved.
      </p>
    </footer>
  );
}
