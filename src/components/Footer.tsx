import { dmSans } from "@/lib/fonts";

export default function Footer() {
  return (
    <footer
      className={`${dmSans.className} bg-native-brown py-6 px-6 text-center`}
    >
      <div className="flex justify-center gap-6 mb-3">
        <a
          href="https://www.instagram.com/nativenomads_earth"
          target="_blank"
          rel="noopener noreferrer"
          className="text-native-beige hover:text-native-white transition-colors"
          aria-label="Instagram"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
            <circle cx="12" cy="12" r="5" />
            <circle cx="17.5" cy="6.5" r="1.5" />
          </svg>
        </a>
        <a
          href="https://www.youtube.com/channel/UC0h7vzxHTVuT_9rpfnc3mAw"
          target="_blank"
          rel="noopener noreferrer"
          className="text-native-beige hover:text-native-white transition-colors"
          aria-label="YouTube"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
          </svg>
        </a>
      </div>
      <p className="text-native-beige/70 text-xs">
        © 2026 Native Nomads. All rights reserved.
      </p>
    </footer>
  );
}
