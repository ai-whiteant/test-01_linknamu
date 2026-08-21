import type { LinkItem } from "@/lib/profile";

export default function LinkCard({ title, url }: LinkItem) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="block w-full rounded-2xl border border-white/50 bg-white/40 px-5 py-4 text-center font-medium text-neutral-700 shadow-[0_4px_24px_-6px_rgba(180,110,60,0.18)] backdrop-blur-md transition-colors duration-200 ease-out hover:bg-white/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-200 dark:border-white/10 dark:bg-white/5 dark:text-neutral-100 dark:shadow-[0_4px_24px_-6px_rgba(0,0,0,0.4)] dark:hover:bg-white/10 dark:focus-visible:ring-white/20"
    >
      {title}
    </a>
  );
}
