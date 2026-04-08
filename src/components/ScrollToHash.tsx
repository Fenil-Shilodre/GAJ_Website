import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToHash() {
  const location = useLocation();

  useEffect(() => {
    const { hash } = location;
    if (!hash) {
      window.scrollTo(0, 0);
      return;
    }

    // Give the route a tick to render before scrolling.
    const id = hash.replace("#", "");
    const t = window.setTimeout(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 0);

    return () => window.clearTimeout(t);
  }, [location]);

  return null;
}

