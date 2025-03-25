import Header from "./Header";
import HeroButtons from "./HeroButtons";
import HeroSociaProof from "./HeroSocialProof";

import ThreeJSCanvas from "./ThreeJSCanvas";

export default function Hero() {
  return (
    <div className="h-screen flex flex-col items-center justify-center pb-12 lg:pb-0 px-4 lg:px-16 z-10 relative">
      <div className="absolute pointer-events-none h-screen inset-0 flex items-center justify-center bg-black radial-gradient" />

      <div className="flex flex-col gap-3 items-center justify-center text-center pb-16">
        <HeroSociaProof />
        <Header />
        <h2 className="text-text/50 text-lg lg:text-2xl z-10 w-[75%]">
          boutique one-man software agency for ambitious founders building world
          class products
        </h2>
        <div className="flex flex-col items-stretch w-[75%] lg:w-auto lg:flex-row gap-4 mt-4 lg:mt-8 z-50">
          <HeroButtons />
        </div>
      </div>

      <div className="absolute right-0 h-screen w-full z-[-10]">
        {/* <Spotlight /> */}

        <ThreeJSCanvas />
      </div>
    </div>
  );
}
