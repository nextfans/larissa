import { DefaultSeoProps } from 'next-seo'
import { layout } from './src/data/'
const { title, description, url, socialImageUrl, siteName, keywords } = layout
const config: DefaultSeoProps = {
  title,
  description,
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url,
    title,
    description,
    images: [
      {
        url: socialImageUrl,
        width: 1024,
        height: 1024,
        alt: `logo da empresa ${layout.siteName}`,
        type: 'image/jpeg',
      },
    ],
    siteName,
  },
  twitter: {
    handle: '@phdduarte',
    site: '@phdduarte',
    cardType: 'summary_large_image',
  },
  additionalLinkTags: [
    {
      rel: 'icon',
      type: 'image/x-icon',
      href: `${url}/favicon.ico`,
    },
  ],
  additionalMetaTags: [
    {
      name: 'application-name',
      content: 'Nextime',
    },
    {
      name: 'keywords',
      content: keywords?.join(', '),
    },
  ],
  robotsProps: {
    nosnippet: true,
    notranslate: true,
    noimageindex: true,
    noarchive: true,
    maxSnippet: -1,
    maxImagePreview: 'large',
    maxVideoPreview: -1,
  },
}

export default config
