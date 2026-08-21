import Profile from "@/components/Profile";
import LinkList from "@/components/LinkList";
import DarkModeToggle from "@/components/DarkModeToggle";
import { profile, links } from "@/lib/profile";

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-sm animate-fade-in flex-col items-center gap-12 px-6 py-20 sm:px-8">
      <DarkModeToggle />
      <Profile {...profile} />
      <LinkList links={links} />
    </main>
  );
}
