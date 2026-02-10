import Paragraph from "@/components/shared/paragraph";
import Places from "@/components/shared/places";

const ProfileSection = () => {
  return (
    <div className="w-full space-y-8">
      <div className="space-y-1 md:space-y-0">
        <div className="flex items-center gap-x-2">
          <h1 className="text-base leading-none font-semibold md:text-lg">
            Bagus Rizal Valdianto
          </h1>

          <CheckmarkIcon />
        </div>
        <p className="text-muted-foreground text-xs leading-none font-medium md:text-sm">
          Fullstack Developer
        </p>
      </div>

      <Paragraph>
        <p>
          I'm a fullstack developer from{" "}
          <span className="text-foreground font-medium">
            Purwokerto, Indonesia
          </span>
          . A sucker for minimalist design. When I'm not coding full-stack apps, you'll find me exploring new places, enjoying nature through hiking and outdoor adventures, or staying active with sports.
        </p>
      </Paragraph>
      <Places />
    </div>
  );
};

export default ProfileSection;

const CheckmarkIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="#1db7f9"
      stroke="hsl(var(--background))"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
};
