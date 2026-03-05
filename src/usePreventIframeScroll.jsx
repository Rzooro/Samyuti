import { useEffect } from "react";

export default function usePreventIframeScroll() {
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const current = window.scrollY;

      // If scroll jump happens suddenly, revert it
      if (Math.abs(current - lastScrollY) > 120) {
        window.scrollTo({ top: lastScrollY, behavior: "auto" });
      } else {
        lastScrollY = current;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
}
