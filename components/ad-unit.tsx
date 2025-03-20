"use client";

import Script from "next/script";
import { useEffect, useRef } from "react";

interface AdUnitProps {
  className?: string;
}

export function AdUnit({ className }: AdUnitProps) {
  const adContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // @ts-ignore
    window.atOptions = {
      'key': process.env.NEXT_PUBLIC_AD_API_KEY,
      'format': 'iframe',
      'height': 250,
      'width': 300,
      'params': {}
    };
  }, []);

  return (
    <div ref={adContainerRef} className={className}>
      <Script
        strategy="lazyOnload"
        src="//relishsubsequentlytank.com/4fca0b92386d3b82825a5412394f577b/invoke.js"
      />
    </div>
  );
}