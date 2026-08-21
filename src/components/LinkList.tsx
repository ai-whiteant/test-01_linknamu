"use client";

import { useEffect, useState } from "react";
import LinkCard from "@/components/LinkCard";
import type { LinkItem } from "@/lib/profile";

export default function LinkList({ links }: { links: LinkItem[] }) {
  const [counts, setCounts] = useState<Record<string, number>>(() =>
    Object.fromEntries(links.map((link) => [link.id, 0])),
  );

  useEffect(() => {
    fetch("/api/clicks")
      .then((res) => res.json())
      .then((data: Record<string, number>) => {
        setCounts((prev) => ({ ...prev, ...data }));
      })
      .catch(() => {});
  }, []);

  const handleClick = (id: string) => {
    setCounts((prev) => ({ ...prev, [id]: (prev[id] ?? 0) + 1 }));
    fetch(`/api/clicks/${id}`, { method: "POST" }).catch(() => {});
  };

  return (
    <div className="flex w-full flex-col gap-4">
      {links.map((link) => (
        <LinkCard
          key={link.id}
          {...link}
          count={counts[link.id] ?? 0}
          onLinkClick={() => handleClick(link.id)}
        />
      ))}
    </div>
  );
}
