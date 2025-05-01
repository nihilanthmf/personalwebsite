import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotest = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Artemy Medvedev",
  description: "Software development for startup founders",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <div
          dangerouslySetInnerHTML={{
            __html: `<script async src="https://www.googletagmanager.com/gtag/js?id=G-DEGKKQTV9J"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-DEGKKQTV9J');
</script>`,
          }}
        />
      </head>
      <body className={`bg-black ${spaceGrotest.className}`}>
        <div className="w-screen h-screen fixed bg-gradient-to-br from-primary/5 via-black to-primary/5" />

        <div className="lg:w-[80%] lg:ml-[10%] 2xl:w-[75%] 2xl:ml-[12.5%] bg-text/5 lg:border-r-[2px] lg:border-l-[2px] border-text/20 lg:px-8">
          <div className="lg:border-r-[2px] lg:border-l-[2px] border-text/20">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
