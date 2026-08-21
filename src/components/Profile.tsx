import type { profile as ProfileType } from "@/lib/profile";

export default function Profile({
  name,
  bio,
  avatarInitial,
}: typeof ProfileType) {
  return (
    <div className="flex flex-col items-center gap-3 text-center">
      <div className="flex h-36 w-36 items-center justify-center rounded-full bg-gradient-to-br from-neutral-100 to-neutral-200 text-5xl font-semibold text-neutral-600 shadow-md ring-4 ring-white dark:from-neutral-800 dark:to-neutral-900 dark:text-neutral-300 dark:ring-neutral-950">
        {avatarInitial}
      </div>
      <div className="flex flex-col gap-1">
        <h1 className="text-xl font-bold tracking-tight">{name}</h1>
        <p className="text-sm text-neutral-500 dark:text-neutral-400">{bio}</p>
      </div>
    </div>
  );
}
