// import Lamp from "./components/lamp";
// import Benefits from "./sections/Benefits";
import BottomCTA from "./sections/BottomCTA";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
// import NavBar from "./sections/NavBar";
import Portfolio from "./sections/Portfolio";
import Services from "./sections/Services";

export default function Home() {
  return (
    <div className="overflow-x-hidden relative bg-grid-white/[0.2]">
      {/* <NavBar /> */}
      {/* <Lamp /> */}
      <Hero />

      <div className="px-4 lg:px-16 z-30 bg-black under-hero-radial-gradient pt-16">
        {/* <Benefits /> */}
        <Services />
        {/* <Testimonials /> */}
        <Portfolio />
        {/* <Pricing /> */}
        <BottomCTA />
        <Footer />

        <div
          className="h-[50%]"
          dangerouslySetInnerHTML={{
            __html: `<!-- Cal element-click embed code begins -->
<script type="text/javascript">
  (function (C, A, L) { let p = function (a, ar) { a.q.push(ar); }; let d = C.document; C.Cal = C.Cal || function () { let cal = C.Cal; let ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === L) { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; if(typeof namespace === "string"){cal.ns[namespace] = cal.ns[namespace] || api;p(cal.ns[namespace], ar);p(cal, ["initNamespace", namespace]);} else p(cal, ar); return;} p(cal, ar); }; })(window, "https://app.cal.com/embed/embed.js", "init");
Cal("init", "30min", {origin:"https://cal.com"});

  Cal.ns["30min"]("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
  </script>
  <!-- Cal element-click embed code ends -->`,
          }}
        />
      </div>
    </div>
  );
}
