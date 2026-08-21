import Image from "next/image";
import type { profile as ProfileType } from "@/lib/profile";

export default function Profile({
  name,
  bio,
  avatarSrc,
}: typeof ProfileType) {
  return (
    <div className="flex flex-col items-center gap-3 text-center">
      <div className="relative h-[150px] w-[150px] overflow-hidden rounded-full shadow-[0_12px_30px_-8px_rgba(180,110,60,0.35)] ring-4 ring-white/80 dark:shadow-[0_12px_30px_-8px_rgba(0,0,0,0.5)] dark:ring-white/10">
        <Image
          src={avatarSrc}
          alt={name}
          fill
          sizes="150px"
          className="object-cover"
          priority
        />
      </div>
      <div className="flex flex-col gap-1">
        <h1 className="text-xl font-bold tracking-tight">{name}</h1>
        <p className="text-sm text-neutral-600 dark:text-neutral-300">{bio}</p>
      </div>
    </div>
  );
}
