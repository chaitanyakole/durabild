import { useState } from "react";
import Illustration from "./Illustration.jsx";

/**
 * Figure — a visual with a modern frame.
 * Drop a real (AI-generated) image via `src`; if omitted or it fails to
 * load, a generated SVG illustration is shown instead.
 */
export default function Figure({
  scene = "skyline",
  src,
  alt = "",
  className = "",
  overlay = true,
  rounded = "rounded-3xl",
}) {
  const [failed, setFailed] = useState(false);
  const showImage = src && !failed;

  return (
    <div className={`relative overflow-hidden ${rounded} ${className}`}>
      {showImage ? (
        <img
          src={src}
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
