import { useState, useCallback, useEffect, useRef } from "react";
import { LoaderContext } from "./loaderContextInstance.js";
import { CONSTRUCTION_STAGES } from "../data/loaderStages.js";

export function LoaderProvider({ children }) {
  // Show loader on initial visit
  const [isLoading, setIsLoading] = useState(true);
  const [isExiting, setIsExiting] = useState(false);
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState(CONSTRUCTION_STAGES[0].text);
  const animFrameRef = useRef(null);
  const startTimeRef = useRef(null);

  const startAnimation = useCallback((duration = 2200) => {
    setIsLoading(true);
    setIsExiting(false);
    setProgress(0);
    setStatusText(CONSTRUCTION_STAGES[0].text);
    startTimeRef.current = null;

    if (animFrameRef.current) {
      cancelAnimationFrame(animFrameRef.current);
    }

    const step = (timestamp) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      const elapsed = timestamp - startTimeRef.current;
      const rawProgress = Math.min(elapsed / duration, 1);

      // Ease out cubic progression for realistic construction meter feeling
      const easedProgress = Math.floor(
        (1 - Math.pow(1 - rawProgress, 2.5)) * 100
      );
      setProgress(easedProgress);

      // Update matching stage message
      for (let i = CONSTRUCTION_STAGES.length - 1; i >= 0; i--) {
        if (easedProgress >= CONSTRUCTION_STAGES[i].at) {
          setStatusText(CONSTRUCTION_STAGES[i].text);
          break;
        }
      }

      if (rawProgress < 1) {
        animFrameRef.current = requestAnimationFrame(step);
      } else {
        setProgress(100);
        setStatusText(CONSTRUCTION_STAGES[CONSTRUCTION_STAGES.length - 1].text);
        // Short pause at 100% before smooth reveal
        setTimeout(() => {
          setIsExiting(true);
          setTimeout(() => {
            setIsLoading(false);
            setIsExiting(false);
          }, 600);
        }, 350);
      }
    };

    animFrameRef.current = requestAnimationFrame(step);
  }, []);

  const closeLoader = useCallback(() => {
    if (animFrameRef.current) {
      cancelAnimationFrame(animFrameRef.current);
    }
    setProgress(100);
    setIsExiting(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsExiting(false);
    }, 400);
  }, []);

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      startAnimation(2200);
    });
    return () => {
      cancelAnimationFrame(frame);
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current);
      }
    };
  }, [startAnimation]);

  return (
    <LoaderContext.Provider
      value={{
        isLoading,
        isExiting,
        progress,
        statusText,
        triggerLoader: () => startAnimation(2200),
        closeLoader,
      }}
    >
      {children}
    </LoaderContext.Provider>
  );
}
