import { useState } from "react";
import Illustration from "./Illustration.jsx";
import { images } from "../data/site.js";

/**
 * Figure — a visual with a modern frame.
 * Resolves `src`, falling back to the scene's photograph, and finally to a
 * generated SVG illustration if no photo exists or the image fails to load.
 */
export default function Figure({
  scene = "hero",
  src,
  alt = "",
  className = "",
  overlay = true,
  rounded = "rounded-3xl",
}) {
  const [failed, setFailed] = useState(false);
  const resolved = src || images[scene];
  const showImage = resolved && !failed;

  return (
    <div className={`relative overflow-hidden ${rounded} ${className}`}>
      {showImage ? (
        <img
          src={resolved}
          alt={alt}
          loading="lazy"
          onError={() => setFailed(true)}
          className="h-full w-full object-cover"
        />
      ) : (
        <Illustration scene={scene} />
      )}
      {overlay && (
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/20 to-transparent" />
      )}
      <div className={`pointer-events-none absolute inset-0 ${rounded} ring-1 ring-inset ring-white/10`} />
    </div>
  );
}
