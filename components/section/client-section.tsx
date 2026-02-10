import Image from "next/image";

import Paragraph from "@/components/shared/paragraph";

import { clientItems } from "@/lib/constants";

const ClientSection = () => {
  return (
    <div className="w-full space-y-4">
      <Paragraph title="Trusted by all">
    <p>
      I've been immersed in the{" "}
      <span className="text-foreground font-medium">
        digital marketing
      </span>{" "}
      and{" "}
      <span className="text-foreground font-medium">
        full-stack development
      </span>{" "}
      fields for over{" "}
      <span className="text-foreground font-medium">3 years</span> — 2 years in a
      professional environment and 1 year as a freelance developer, working with a
      diverse range of clients across various industries.
    </p>
    <p>
      My passion for crafting clean, efficient solutions, combined with a strong
      attention to detail and results-driven mindset, has helped me build lasting
      relationships and trust with every client I've worked with.
    </p>
  </Paragraph>

      {/* logo partner */}
      {/* <div className="flex w-full flex-wrap items-center justify-center gap-x-12">
        {clientItems.map((item, index) => (
          <div
            key={index}
            className="dark: relative size-16 grayscale md:size-20 dark:invert"
          >
            <Image
              src={item}
              fill
              alt={`Client's logo ${index}`}
              quality={70}
              loading="lazy"
              sizes="(max-width: 640px) 25vw, (max-width: 1024px) 12vw, 6vw"
              className="object-contain"
            />
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default ClientSection;
