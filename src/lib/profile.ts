export type LinkItem = {
  id: string;
  title: string;
  url: string;
};

export const profile = {
  name: "김클로",
  bio: "세계 최강 바이브코더",
  avatarInitial: "김",
};

export const links: LinkItem[] = [
  { id: "whiteant", title: "하얀개미", url: "https://example.com/whiteant" },
  {
    id: "daejeon-girls",
    title: "대전여자상업고등학교",
    url: "https://example.com/daejeon-girls",
  },
  { id: "github", title: "GitHub", url: "https://github.com" },
];
