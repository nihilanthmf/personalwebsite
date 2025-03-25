"use client";

import React from "react";

export default function HeroSociaProof() {
  return (
    <div className="relative border-animation p-[1px] rounded-full mb-4 z-10">
      <div className="pr-4 pl-3 py-1 flex flex-row gap-3 items-center rounded-full bg-gradient-to-br from-neutral-500 to-neutral-800 z-50">
        {/* border-[1px] border-white/20 */}
        {/* <Sparkles size={18} className="" /> */}

        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black/70" />
        <div className="pulsating-circle rounded-full p-1 bg-primary/30">
          <div className="bg-primary rounded-full size-[6px]" />
        </div>
        <p className="hidden sm:block text-sm lg:text-lg text-white/100">
          <span className="">140.000+</span> people use the stuff we&apos;ve
          built
        </p>
        <p className="block sm:hidden text-sm text-white/100">
          <span className="font-black">140.000+ users</span> in our software
        </p>
      </div>
    </div>
  );
}
