import { CircleGauge, LucideProps, MessageSquare, Sparkle } from "lucide-react";
import React from "react";

export default function Benefits() {
  return (
    <div className="w-full mb-64">
      <h1 className="font-black text-5xl lg:text-6xl leading-none text-center bg-clip-text text-transparent bg-gradient-to-br from-neutral-200 to-neutral-500">
        The 3 pillars
      </h1>

      <div className="grid lg:grid-cols-3 gap-16 lg:gap-0 mt-32 mb-16">
        <Benefit
          title="Quality"
          text="Because good ideas should have great execution"
          Icon={Sparkle}
        />
        <Benefit
          title="Speed"
          text="Because speed matters in early stage companies"
          Icon={CircleGauge}
        />
        <Benefit
          title="Communication"
          text="Because proper communication is the bridge between an idea and right execution"
          Icon={MessageSquare}
        />
      </div>
    </div>
  );
}

function Benefit({
  title,
  text,
  Icon,
}: {
  title: string;
  text: string;
  Icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;
}) {
  return (
    <div className="flex flex-col items-center gap-4 rounded-lg">
      <Icon size={32} className="text-text/70" />
      <h2 className="text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-br from-neutral-200 to-neutral-500">
        {title}
      </h2>
      <p className="text-textLightPale text-center lg:w-[50%]">{text}</p>
    </div>
  );
}
