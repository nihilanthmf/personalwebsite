"use client";

import { useState } from "react";
import Button from "../components/button";
import Input, { Textarea } from "../components/input";
import Loading from "../components/Loading";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
export default function BottomCTA() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [consent, setConsent] = useState(false);
  const [noConsent, setNoConsent] = useState(false);
  const [noName, setNoName] = useState(false);
  const [noEmail, setNoEmail] = useState(false);

  return (
    <div className="flex flex-col w-[80%] ml-[10%]" id="contact">
      <h1 className="text-center font-black text-5xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-br from-neutral-200 to-neutral-500">
        let&apos;s discuss your idea!
      </h1>

      <h2 className="text-center text-text/50 text-lg lg:text-2xl z-10 mt-4">
        lets have a 30min call to discuss your idea and see whether we&apos;re a
        good fit to work together!
      </h2>

      <div className="flex flex-col gap-2 mt-8 lg:w-[60%] lg:ml-[20%]">
        <Input
          placeholder="your name"
          value={name}
          className={cn("transition-colors", noName ? "border-red-500 bg-red-500/10" : "")}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          placeholder="your email"
          value={email}
          className={cn("transition-colors", noEmail ? "border-red-500 bg-red-500/10" : "")}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Textarea
          placeholder="message (optional)"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <div className="text-center text-text/50 text-md">
          <div
            className={cn(
              "inline-flex w-4 h-4 transition-colors items-center cursor-pointer justify-center rounded-sm border-[1px] border-text/20 text-text mr-2",
              noConsent && "border-red-500 bg-red-500/10"
            )}
            onClick={() => setConsent(!consent)}
          >
            {consent ? (
              <Check className="w-3 h-3" />
            ) : (
              <Check className="w-3 h-3 invisible" />
            )}
          </div>
          i agree to the processing of my personal data to be contacted about my
          inquiry
        </div>
        <Button
          variant="default"
          className="mt-4 flex items-center justify-center gap-3"
          onClick={async () => {
            if (!name) {
              setNoName(true);
            } else {
              setNoName(false);
            }
            if (!email) {
              setNoEmail(true);
            } else {
              setNoEmail(false);
            }
            if (!consent) {
              setNoConsent(true);
            } else {
              setNoConsent(false);
            }

            if (!name || !email || !consent) {
              return;
            }

            setLoading(true);

            const res = await fetch("/api/sendform", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ name, email, message }),
            });

            setLoading(false);

            if (res.status !== 200) {
              alert(
                "something went wrong! please reach out to us via email (artemiy.logmy@gmail.com)"
              );
            } else {
              setSuccess(true);
            }
          }}
        >
          {loading && <Loading variant="secondary" />}
          {loading ? "sending..." : success ? "sent!" : "send form"}
        </Button>
      </div>
      <p className="text-center text-text/30 text-md lg:text-lg z-10 mt-4">
        don&apos;t like forms?{" "}
        <a
          href="mailto:artemiy.logmy@gmail.com"
          className="underline hover:text-text/50 transition-colors cursor-pointer"
        >
          email us
        </a>
      </p>
    </div>
  );
}
