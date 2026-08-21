import Profile from "@/components/Profile";
import LinkCard from "@/components/LinkCard";
import DarkModeToggle from "@/components/DarkModeToggle";
import { profile, links } from "@/lib/profile";

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-sm animate-fade-in flex-col items-center gap-12 px-6 py-20 sm:px-8">
      <DarkModeToggle />
      <Profile {...profile} />
      <div className="flex w-full flex-col gap-4">
        {links.map((link) => (
          <LinkCard key={link.id} {...link} />
        ))}
      </div>
    </main>
  );
}
