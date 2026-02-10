import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const BasicAvatar = () => {
  return (
    <Avatar>
      <AvatarImage src="https://github.com/bagusrizal22.png" alt="User Avatar" />
      <AvatarFallback>BR</AvatarFallback>
    </Avatar>
  );
};
