export type LinkItem = {
  id: string;
  title: string;
  url: string;
};

export const profile = {
  name: "하얀개미",
  bio: "풀 스택 개발자 | 요즘에는 AI 개발에 관심이 많아요",
  avatarSrc: "/w_logo.png",
};

export const links: LinkItem[] = [
  { id: "whiteant", title: "👍 하얀개미", url: "http://www.whiteant.or.kr" },
  {
    id: "daejeon-girls",
    title: "👩‍🦰 대전여자상업고등학교",
    url: "https://aramhs.djsch.kr/main.do",
  },
  { id: "github", title: "✔ GitHub", url: "https://github.com/ai-whiteant" },
];
