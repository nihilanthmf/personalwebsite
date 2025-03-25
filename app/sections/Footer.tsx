export default function Footer() {
  return (
    <div className="text-sm lg:text-md w-full mt-48 pb-6 flex flex-row justify-between">
      <p className="font-medium text-text/30">artemy</p>

      <div className="flex flex-row gap-4">
        <SocialLink text="twitter" href="https://x.com/artemy_medvedev" />
        <SocialLink text="github" href="https://github.com/nihilanthmf" />
        <SocialLink text="telegram" href="https://t.me/holygoose" />
      </div>
    </div>
  );
}

function SocialLink({ text, href }: { text: string; href: string }) {
  return (
    <a
      className={
        "font-medium text-text/30 hover:cursor-pointer transition-colors hover:text-text/50"
      }
      href={href}
    >
      {text}
    </a>
  );
}
