import type { LinkItem } from "@/lib/profile";

export default function LinkCard({ title, url }: LinkItem) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="block w-full rounded-xl border border-neutral-200 bg-white px-5 py-4 text-center font-medium shadow-sm transition-all duration-150 ease-out hover:-translate-y-0.5 hover:border-neutral-300 hover:shadow-md active:translate-y-0 active:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 dark:border-neutral-700 dark:bg-neutral-900 dark:hover:border-neutral-600 dark:focus-visible:ring-neutral-500"
    >
      {title}
    </a>
  );
}
