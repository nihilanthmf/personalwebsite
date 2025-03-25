"use client";

import React, { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

export default function HeroSociaProof() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, axis: "y" }, [
    Autoplay({ delay: 1000 }),
  ]);

  const lines = ["is used by 100.000+ people", "is used by 100.000+ people"];
  useEffect(() => {
    if (emblaApi) {
      console.log(emblaApi.slideNodes()); // Access API
    }
  }, [emblaApi]);

  return (
    <div className="flex flex-row gap-2 text-2xl">
      The software I built
      <div className="flex flex-col" ref={emblaRef}>
        <div className="flex flex-col h-[10px]">
          {lines.map((line: string) => (
            <div
              key={line}
              className="bg-clip-text text-transparent bg-gradient-to-br from-primary to-primary/50 font-bold"
            >
              {line}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
