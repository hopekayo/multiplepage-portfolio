export const globalConfig = {
  site: {
    name: "Your Portfolio Name",
    author: "Hopekayo",
    // description: "A brief description of your portfolio website",
    description: "自由，是勇敢和独立的果实",
    url: "/"
  },
  navigation: {
    aria: "Main Navigation",
    items: [
      {
        title: "Home",
        href: "/"
      },
      // {
      //   title: "Projects",
      //   href: "/projects"
      // },
      {
        title: "Posts",
        href: "/posts"
      },
      {
        title: "About",
        href: "/about"
      }
    ]
  },
  footer: {
    aria: "Footer Navigation",
    copyright: "© 2025 Hopekayo. All rights reserved.",
    social: {
      twitter: "https://x.com/hopekayo",
      github: "https://github.com/hopekayo",
      email: "hopekayo@gmail.com"
    }
  }
} as const;   