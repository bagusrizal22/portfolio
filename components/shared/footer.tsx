"use client";

import { useInView } from "motion/react";
import { toast } from "sonner";

import {
  PiArrowUpBold,
  PiAtBold,
  PiAtDuotone,
} from "react-icons/pi";

import { useRef } from "react";

import Link from "next/link";

import { Button } from "@/components/ui/button";

import { copyToClipboard } from "@/lib/functions";
import { cn } from "@/lib/utils";

const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const scrollToTop = () => {
    if (typeof window === "undefined") return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReduced) {
      window.scrollTo(0, 0);
      return;
    }

    const startY = window.scrollY;
    const durationMs = 700;
    const startTime = performance.now();

    const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

    const step = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / durationMs, 1);
      const eased = easeOutCubic(progress);

      window.scrollTo(0, Math.round(startY * (1 - eased)));

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  };

  return (
    <footer
      ref={ref}
      className="relative flex w-full flex-col px-4 py-12 md:px-8 lg:px-16"
    >
      <div
        className={`mx-auto flex w-full max-w-3xl flex-col items-center gap-y-12 pb-20 transition-all duration-500 ease-in-out ${
          isInView
            ? "blur-0 scale-100 opacity-100"
            : "scale-80 opacity-0 blur-md"
        }`}
      >
        <div className="grid w-full grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-3">
          <p className="text-foreground/60 col-span-full pb-4 text-center text-base md:pb-8">
            ﹏𓊝﹏𓂁﹏
          </p>

          <div className="text-foreground flex w-full flex-col items-center md:items-start">
            <Logo className="text-foreground mb-2 h-10 w-16" />

            <p className="text-foreground/60 mb-4 max-w-64 text-center text-xs leading-relaxed font-medium text-balance md:max-w-full md:text-left">
              Helps create a better web experience for everyone.
            </p>

            <div className="flex flex-row items-center gap-x-6 gap-y-2 text-sm md:flex-col md:items-start">
              <button
                className="anim text-foreground hover:text-foreground/80 cursor-pointer"
                aria-label="Back on top"
                onClick={scrollToTop}
              >
                <PiArrowUpBold className="mr-1 inline-block size-3 self-center" />
                top
              </button>
              <button
                className="anim text-foreground hover:text-foreground/80 cursor-pointer"
                aria-label="Copy my email"
                onClick={() => {
                  copyToClipboard("bagusrizal175@gmail.com");
                  toast("Copied email to clipboard", {
                    duration: 2000,
                    icon: <PiAtDuotone size={20} />,
                  });
                }}
              >
                <PiAtBold className="mr-1 inline-block size-3 self-center" />
                email
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-x-12 gap-y-12 md:flex-row">
            <div className="flex flex-col gap-y-3">
              <h2 className="text-foreground text-center text-sm font-semibold md:text-left">
                Resources
              </h2>
              <div className="text-foreground/60 flex flex-col gap-y-2 text-center text-sm font-medium md:gap-y-1 md:text-left">
                <Link
                  href={"https://snipplet.vercel.app"}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Snipplet"
                  className="anim hover:text-foreground"
                  prefetch={false}
                >
                  Snipplet
                </Link>
                <Link
                  href={"/api/feed"}
                  aria-label="RSS feed"
                  className="anim hover:text-foreground"
                  prefetch={false}
                >
                  RSS
                </Link>
                <Link
                  href={"/note"}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Note"
                  className="anim hover:text-foreground"
                  prefetch={false}
                >
                  Note
                </Link>
                <Link
                  href={"https://github.com/bagusrizal22?tab=repositories&q=starter"}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Starter repositories"
                  className="anim hover:text-foreground"
                  prefetch={false}
                >
                  Starter Kit
                </Link>
              </div>
            </div>

            <div className="flex flex-col gap-y-3">
              <h2 className="text-foreground text-center text-sm font-semibold md:text-left">
                Website
              </h2>
              <div className="text-foreground/60 flex flex-col gap-y-2 text-center text-sm font-medium md:gap-y-1 md:text-left">
                <Link
                  href={"/bucket-list"}
                  className="anim hover:text-foreground"
                >
                  Bucket List
                </Link>
                <Link href={"/personal"} className="anim hover:text-foreground">
                  Personal
                </Link>
                <Link
                  href={"/mentorship"}
                  className="anim hover:text-foreground"
                >
                  Mentorship
                </Link>
                <Link href={"/404"} className="anim hover:text-foreground">
                  Not Found
                </Link>
              </div>
            </div>
          </div>

          <div className="text-foreground flex w-full flex-col items-center md:ml-auto md:w-fit md:items-start">
            <p className="mb-2 font-semibold">Stay Connected</p>

            <p className="text-foreground/60 mb-4 max-w-64 text-center text-xs leading-relaxed font-medium text-balance md:max-w-48 md:text-left">
              Leave a message or subscribe to my newsletter.
            </p>

            <div className="text-foreground/80 flex flex-row items-center gap-x-6 text-sm md:flex-col md:items-start">
              <Button
                size={"sm"}
                variant={"ghost"}
                className="group/button text-foreground hover:text-foreground hover:decoration-foreground h-fit w-fit px-0 py-1 underline decoration-transparent hover:bg-transparent"
                asChild
              >
                <Link href={"/guestbook"} aria-label="My Guestbook">
                  <span className="sr-only">Leave a mark on /guestbook</span>
                  guestbook
                </Link>
              </Button>
              <Button
                size={"sm"}
                variant={"ghost"}
                className="group/button text-foreground hover:text-foreground hover:decoration-foreground h-fit w-fit px-0 py-1 underline decoration-transparent hover:bg-transparent"
                asChild
              >
                <Link
                  href={"#"}
                  aria-label="My Substack newsletter"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="sr-only">My Substack newsletter</span>
                  newsletter
                </Link>
              </Button>
            </div>
          </div>

          <p className="text-foreground/60 text-center text-sm leading-relaxed font-medium md:col-span-full">
            <br />
            &copy; {new Date().getFullYear()} bagusrizal. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

const Logo = ({ className }: { className?: string }) => (
  <svg
    className={cn("", className)}
    width="64"
    height="40"
    viewBox="0 0 64 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <text
      x="2"
      y="22"
      fill="currentColor"
      fontFamily={'var(--font-new-rocker), "New Rocker", cursive'}
      fontSize="18"
      fontWeight="400"
      letterSpacing="0.5"
    >
      Rizal
    </text>
    <path
      d="M2 28 C6 24 10 24 14 28 C18 32 22 32 26 28 C30 24 34 24 38 28 C42 32 46 32 50 28 C54 24 58 24 62 28"
      stroke="#ff2d2d"
      strokeWidth="2.5"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default Footer;
