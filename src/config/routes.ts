export const externalRoutes = {
  facebook: "https://www.facebook.com/discoursio",
  vk: "https://www.facebook.com/discoursio",
  twitter: "https://twitter.com/discours_io",
  telegram: "https://teleg.one/discoursio",
  yandexZen: "https://zen.yandex.ru/discoursio",
  podcast: "https://anchor.fm/discours",
  rss: "https://discours.io/rss",
};

export const internalRoutes = {
  // Help us
  help: "/help",
  helpSucceed: "/donate/thankyou",
  helpFailed: "/donate/fail",
  helpTermsAndConditions: "/donate-offer",
  // About and static pages
  index: "/",
  manifest: "/manifest",
  guide: "/guide",
  dogma: "/dogma",
  almanac: "/almanac",
  search: "/search",
  termsOfUse: "/terms-of-use",
  howToWrite: "/how-to-write",
  // Profiles
  author: "/:id",
  profile: "/profile",
  authors: "/authors",
  editProfile: "/edit/profile",
  editAuthor: "/edit/authors/:slug",
  // Become an author
  postArticle: "/post/article",
  postLiterature: "/post/literature",
  postImage: "/post/image",
  postMusic: "/post/music",
  postVideo: "/post/video",
  // Tags
  tag: "/tags/:slug",
  // Articles
  articles: "/articles/all",
  ariclesByCategory: "/articles/:id",
  article: "/articles/:categoyId/:id",
  editArticle: "/edit/articles/:categorySlug/:slug",
  // Exposition
  expoItemsByType: "/expo/:type",
  expoItemsByCategory: "/expo/:type/:categoryId",
  expoItem: "/expo/:type/:categoryId/:id",
  editExpoItem: "/edit/expo/:typeSlug/:categorySlug/:slug",
  // Events
  events: "/events",
  eventsByCategory: "/events/:slug",
  event: "/events/:categorySlug/:slug",
  // Private
  privateNotifications: "/in/notifications",
  privateIndex: "/in/editorial",
};

export const routes = {
  ...externalRoutes,
  ...internalRoutes,
};

export type InternalRoute = keyof typeof internalRoutes;
export type ExternalRoute = keyof typeof externalRoutes;
