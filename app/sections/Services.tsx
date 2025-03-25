import { cn } from "@/lib/utils";

export default function Services() {
  return (
    <div className="w-full mb-32 lg:mb-64 2xl:px-16 z-50">
      <h1 className="font-black text-5xl lg:text-6xl leading-none text-center bg-clip-text text-transparent bg-gradient-to-br from-neutral-200 to-neutral-500">
        what do we do
      </h1>

      <h2 className="text-text/50 text-lg lg:text-2xl z-10 mt-4 w-[80%] ml-[10%] text-center">
        we&apos;re a 0-1 agency. we take your idea, design, develop (custom
        code) and help bring your mvp to the market
      </h2>

      <div className="flex flex-col lg:grid lg:grid-cols-2 gap-4 mt-16">
        <Service
          index="1"
          title="talk"
          text="we talk about your idea, discuss your ideal customer profile, competitors, etc. and create a simple roadmap"
        />

        <Service
          index="2"
          title="design"
          text="we design your app together with you, iterate based on your feedback and work on it until it's perfect"
          right
        />

        <Service
          index="3"
          title="build"
          text="we build your app with custom code, ship fast and care about the little details"
        />

        <Service
          index="4"
          title="release + iterate"
          text="we release the mvp and iterate based on your users' feedback to build what they really need"
          right
        />
      </div>
    </div>
  );
}

function Service({
  index,
  title,
  text,
  right = false,
  className,
}: {
  index: string;
  title: string;
  text: string;
  right?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-row items-center gap-4 lg:w-[90%] px-4 py-2",
        right && "lg:ml-[10%]",
        className
      )}
    >
      <div
        className={cn(
          "flex flex-col justify-center text-center lg:text-start gap-2",
          right && "lg:text-end"
        )}
      >
        <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-neutral-200 to-neutral-500">
          {right && <h2 className="hidden lg:inline-block -mr-2">{title}</h2>}
          <div className="inline-flex items-center justify-center border-[1px] border-text/20 bg-gradient-to-br from-primary/15 to-background/20 border-solid w-14 h-14">
            {index}
          </div>
          {!right && <h2 className="hidden lg:inline-block -ml-2">{title}</h2>}
          <h2 className="inline-block lg:hidden -ml-2">{title}</h2>
        </div>
        <p className="text-textLightPale">{text}</p>
      </div>
    </div>
  );
}
