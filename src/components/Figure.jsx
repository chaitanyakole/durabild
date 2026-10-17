import { useState, useRef, useEffect } from "react";
import Illustration from "./Illustration.jsx";
import { images } from "../data/site.js";
import { placeholders } from "../data/placeholders.js";

/**
 * Figure — a high-performance visual component.
 * - Serves optimized WebP with progressive JPEG fallback
 * - Instant inline LQIP (low-quality blur placeholder) to eliminate blank boxes
 * - Branded skeleton shimmer sweep while streaming/decoding
 * - Smooth cross-fade transition upon image load
 * - Fallback to vector illustration if image fails
 */
export default function Figure({
  scene = "hero",
  src,
  alt = "",
  className = "",
  overlay = true,
  rounded = "rounded-3xl",
  eager = false,
}) {
  const [failed, setFailed] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const imgRef = useRef(null);

  const resolved = src || images[scene];
  const matchedScene =
    scene || Object.keys(placeholders).find((k) => resolved?.includes(k));
  const placeholder = placeholders[matchedScene] || placeholders[scene];
  const showImage = resolved && !failed;

  // Determine WebP source and fallback JPG
  const webpSrc = resolved?.endsWith(".jpg")
    ? resolved.replace(/\.jpg$/, ".webp")
    : resolved?.endsWith(".webp")
    ? resolved
    : null;
  const fallbackSrc = resolved?.endsWith(".webp")
    ? resolved.replace(/\.webp$/, ".jpg")
    : resolved;

  // Immediately resolve if image is already cached in browser memory
  useEffect(() => {
    if (imgRef.current?.complete && imgRef.current?.naturalWidth > 0) {
      setLoaded(true);
    }
  }, [resolved]);

  return (
    <div
      className={`relative overflow-hidden bg-charcoal-900 ${rounded} ${className}`}
    >
      {/* 1. Low-Quality Blur Placeholder for instant visual feedback */}
      {placeholder && (
        <div
          aria-hidden="true"
          className={`pointer-events-none absolute inset-0 bg-cover bg-center filter blur-lg scale-110 transition-opacity duration-700 ease-out ${
            loaded ? "opacity-0" : "opacity-80"
          }`}
          style={{ backgroundImage: `url("${placeholder}")` }}
        />
      )}

      {/* 2. Skeleton Shimmer Sweep while streaming */}
      {!loaded && !failed && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 skeleton-shimmer bg-charcoal-900/60"
        />
      )}

      {/* 3. Main Picture Element with WebP + progressive JPG */}
      {showImage ? (
        <picture className="block h-full w-full">
          {webpSrc && <source srcSet={webpSrc} type="image/webp" />}
          <img
            ref={imgRef}
            src={fallbackSrc || resolved}
            alt={alt}
            loading={eager ? "eager" : "lazy"}
            fetchPriority={eager ? "high" : "auto"}
            decoding="async"
            onLoad={() => setLoaded(true)}
            onError={() => setFailed(true)}
            className={`h-full w-full object-cover transition-opacity duration-700 ease-out ${
              loaded ? "opacity-100" : "opacity-0"
            }`}
          />
        </picture>
      ) : (
        <Illustration scene={scene} />
      )}

      {/* 4. Vignette / Contrast Overlay */}
      {overlay && (
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/20 to-transparent" />
      )}

      {/* 5. Modern Edge Highlight Ring */}
      <div
        className={`pointer-events-none absolute inset-0 ${rounded} ring-1 ring-inset ring-white/10`}
      />
    </div>
  );
}
