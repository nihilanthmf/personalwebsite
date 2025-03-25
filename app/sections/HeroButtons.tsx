"use client";

import Button from "../components/button";

export default function HeroButtons() {
  return (
    <>
      <Button
        variant="default"
        onClick={() => {
          window.open("#contact", "_self");
        }}
      >
        book a call
      </Button>
      <Button
        variant="outline"
        onClick={() => {
          window.open("#portfolio", "_self");
        }}
      >
        portfolio
      </Button>
    </>
  );
}
