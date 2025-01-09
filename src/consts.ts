export type Site = {
  TITLE: string
  DESCRIPTION: string
  EMAIL: string
  NUM_POSTS_ON_HOMEPAGE: number
  POSTS_PER_PAGE: number
  SITEURL: string
}

export type Link = {
  href: string
  label: string
}

export const SITE: Site = {
  TITLE: '2bs weblog',
  DESCRIPTION:
    'personal blog about linux, container, open source and related stuff - 2tap2.be 2TAP2B twotaptobi oder einfach tobias',
  EMAIL: 'tobias@steltner.cc',
  NUM_POSTS_ON_HOMEPAGE: 10,
  POSTS_PER_PAGE: 10,
  SITEURL: 'https://2tap2.be',
}

export const NAV_LINKS: Link[] = [
  { href: '/blog', label: 'blog' },
  { href: '/authors', label: 'authors' },
//  { href: '/about', label: 'about' },
  { href: '/tags', label: 'tags' },
]

export const SOCIAL_LINKS: Link[] = [
  { href: 'tobias@steltner.cc', label: 'Email' },
  { href: 'https://github.com/2TAP2B', label: 'GitHub' },
  { href: 'https://matrix.to/#/@tobias:xanten.cc', label: 'Matrix' },
  { href: 'https://todon.nl/@2b', label: 'Mastodon' },
  { href: '/rss.xml', label: 'RSS' },

]
