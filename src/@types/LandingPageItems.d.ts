import { NextCallToActionProps } from '../components/organisms/NextCallToAction'

interface Layout {
  bg: string
  description: string
  keywords: string[]
  logoAlt: string
  logoHeight: number
  logoSrc: string
  logoSubtitle?: string
  logoSubtitleColor: string
  logoWidth: number
  siteName: string
  socialImageUrl: string
  socialNetwork: string
  socialTitle: string
  title: string
  url: string
}

export interface NextHeroItem {
  title: string
  text: string
  textButton: string
  url: string
}

export interface LandingPageItems {
  hasNextCallToActionWithAnnotation?: boolean
  layout: Layout
  nextCallToActionItems: NextCallToActionProps[]
}

export interface NavItem {
  children?: Array<NavItem>
  href: string
  label: string
  subLabel?: string
}
