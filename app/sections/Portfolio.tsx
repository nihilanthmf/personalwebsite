import Image from "next/image";
import Button from "../components/button";
import { ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Portfolio() {
  return (
    <div className="w-full mb-32 lg:mb-64" id="portfolio">
      <h1 className="font-black text-5xl lg:text-6xl leading-none text-center bg-clip-text text-transparent bg-gradient-to-br from-neutral-200 to-neutral-500 mb-12">
        a few of our projects
      </h1>

      <div className="flex flex-col lg:grid lg:grid-cols-4 gap-4">
      <Project
          title="stayn"
          alt="stayn"
          description="churn prevention software (waiting list)"
          image="stayn.jpeg"
          className="lg:col-span-2"
          stack="next.js"
          href="https://stayn.artemymedvedev.com"
          myWork="design + development"
        />
        <Project
          title="puritify"
          alt="puritify"
          description="software to validate emails on signup"
          image="puritify.jpeg"
          className="lg:col-span-2"
          stack="next.js, firebase, node.js, express"
          href="https://puritify.com"
          myWork="design + full stack development"
        />
        <Project
          title="coldHunt twitter"
          alt="coldHunt twitter"
          description="software for automating Twitter cold outreach"
          image="coldhunttwitter.jpeg"
          className="lg:col-span-2"
          stack="puppeteer, electron, next.js"
          href="https://cold-hunt.com"
          myWork="design + full stack development"
        />

        <Project
          title="daniel dalen's community map"
          alt="daniel dalen's community map"
          description="a map for the daniel dalen's community"
          image="map.jpeg"
          className="lg:col-span-2"
          stack="next.js, supabase"
          href="https://daniel-community-map.vercel.app/"
          myWork="design + full stack development"
        />
        <Project
          title="coldHunt"
          alt="coldHunt SaaS"
          description="instagram/twitter ai cold dm automation software"
          image="coldhunt.jpeg"
          className="lg:col-span-2"
          stack="next.js, supabase, browser extension"
          href="https://ig.cold-hunt.com"
          myWork="design + full stack development"
        />
        {/* <Project
          title="Support Chat"
          alt="Support Chat"
          description="Customer support chat with Telegram integration"
          image="customersupport.jpeg"
          className="lg:col-span-2"
          stack="Next.js, Supabase, Node.js, Express, Telegram API"
          href="https://chat.artemymedvedev.com"
          myWork="Design + Full stack development"
        /> */}
        <Project
          title="cents"
          alt="cents SaaS"
          description="invoicing software"
          image="cents.png"
          className="lg:col-span-2"
          stack="next.js, supabase, node.js, express"
          href="https://centsapp.com"
          myWork="design + full stack development"
        />
        <Project
          title="summify"
          alt="summify mobile app"
          description="ai speech summary mobile app"
          image="summify.jpeg"
          className="col-span-1"
          stack="react native, firebase, node.js, express"
          mobile={true}
          myWork="design + full stack development"
        />
        <Project
          title="marketrite"
          alt="marketrite mobile app"
          description="mobile app for a grocery startup"
          image="marketrite.png"
          className="col-span-1"
          stack="react native, firebase, node.js, express"
          mobile={true}
          myWork="design + full stack development"
        />
      </div>
    </div>
  );
}

function Project({
  title,
  image,

  alt,
  className,
  description,
  stack,
  mobile,
  href,
  myWork,
}: {
  title: string;
  image: string;

  alt: string;
  className: string;
  description: string;
  stack: string;
  mobile?: boolean;
  href?: string;
  myWork: string;
}) {
  return (
    <div
      className={cn(
        "group relative col-span-3 flex flex-col justify-between overflow-hidden rounded-xl",
        "transform-gpu bg-black [border:1px_solid_rgba(255,255,255,.1)] [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
        className
      )}
    >
      <div className="h-full w-full">
        <Image
          src={`/${image}`}
          alt={alt}
          width={1000}
          height={1000}
          className="rounded-t-xl h-full w-full"
        />
      </div>
      <div
        className={cn(
          "pointer-events-none flex transform-gpu flex-col p-4 transition-all duration-300 bg-black h-full",
          mobile
            ? "group-hover:-translate-y-[38px]"
            : "group-hover:-translate-y-[102px] lg:group-hover:-translate-y-[54px]"
        )}
      >
        <h3 className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-br from-neutral-200 to-neutral-500">
          {title}
        </h3>
        <p className="max-w-lg text-white/50">{description}</p>
      </div>

      <div
        className={cn(
          "pointer-events-none absolute bottom-0 w-full translate-y-10 transform-gpu pb-4 px-4 opacity-0 transition-all duration-300 bg-black group-hover:translate-y-0 group-hover:opacity-100 flex gap-2 lg:gap-0 z-10",
          mobile
            ? "flex-col justify-start items-start gap-2"
            : "flex-row justify-between items-center",
          "flex-col items-start lg:items-center lg:flex-row"
        )}
      >
        {mobile ? null : (
          <Button
            variant="default"
            className="pointer-events-auto flex flex-row items-center gap-2 text-sm z-50"
          >
            <a href={href} target="_blank">
              open
            </a>
            <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
        )}
        <div className="flex flex-col -gap-1">
          <p className="text-sm text-white/50">{stack}</p>
          <p className="text-sm text-white/50">{myWork}</p>
        </div>
      </div>
    </div>
  );
}
