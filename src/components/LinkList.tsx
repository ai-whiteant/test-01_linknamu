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

  const handleClick = async (id: string) => {
    setCounts((prev) => ({ ...prev, [id]: (prev[id] ?? 0) + 1 }));
    try {
      const res = await fetch(`/api/clicks/${id}`, { method: "POST" });
      const data: { count: number } = await res.json();
      setCounts((prev) => ({ ...prev, [id]: data.count }));
    } catch {
      setCounts((prev) => ({ ...prev, [id]: Math.max((prev[id] ?? 1) - 1, 0) }));
    }
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
