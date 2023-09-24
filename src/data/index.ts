import { LandingPageItems, Layout } from '../@types/LandingPageItems'
import { NextCallToActionProps } from '../components/organisms/NextCallToAction'

export const url =
  process.env.NEXT_PUBLIC_SITE_URL || 'https://club.nextime.com.br'
const siteName = 'NeXTCLUB'

export const layout: Layout = {
  title: `${siteName} | Encontre conexões além das aparências`,
  url,
  description:
    'Encontre conexões significativas com nosso aplicativo inovador, que utiliza a inteligência artificial Lis para analisar interesses, personalidade e preferências, criando relacionamentos autênticos e duradouros em todos os aspectos da sua vida.',
  keywords: [
    'Aplicativo de relacionamento',
    'Conexões significativas',
    'Compatibilidade',
    'Interesses e hobbies',
    'Personalidade',
    'Amizades',
    'Relacionamentos amorosos',
    'Colegas de trabalho',
    'Laços familiares',
    'Perfil verificado',
    'Economia de tempo',
    'IA Lis',
    'Segurança',
    'Teste MBTI',
    'ChatGPT-4',
    'ChatGPT',
    'GPT',
  ],
  siteName,
  socialTitle: `${siteName} | Encontre conexões além das aparências`,
  socialImageUrl: `${url}/images/social_image.jpg`,
  socialNetwork: `https://api.whatsapp.com/send?phone=5511972436305&text=Ol%C3%A1,%20${siteName}.%20`,
  logoSrc: '/images/logos/logo.svg',
  logoWidth: 40,
  logoHeight: 40,
  logoAlt: `${siteName} Logo`,
  logoSubtitle: siteName,
  bg: 'next-quaternary',
  logoSubtitleColor: 'next-primary',
}

export const nextCallToActionItems: NextCallToActionProps[] = [
  {
    id: '0',
    title: 'Encontre conexões além das aparências',
    text: 'Descubra o potencial de relacionamentos incríveis com nosso aplicativo, que combina a análise de interesses, personalidade e preferências para encontrar sua combinação ideal. Seja para encontrar um parceiro romântico, fazer novas amizades ou até mesmo fortalecer laços familiares e profissionais, nossa IA está aqui para transformar a maneira como você se conecta com as pessoas.',
    textButton: 'Transforme suas conexões',
    url: '/signup',
    width: 500,
    height: 500,
    image: '/images/home/image_0.jpg',
    priority: true,
    directionMd: 'row-reverse',
  },
  {
    id: '1',
    title: 'Inteligência Artificial que transforma conexões',
    text: 'Apresentamos Lis, nossa avançada IA construída com o núcleo do ChatGPT-4, que analisa os interesses, personalidades e preferências dos usuários para encontrar combinações ideais. Graças a essa poderosa tecnologia, Lis oferece sugestões de conexão mais assertivas e personalizadas. Com a ajuda de Lis, você encontrará parceiros, amigos e colegas com maior compatibilidade, melhorando a qualidade dos seus relacionamentos.',
    image: '/images/home/image_1.jpg',
    textButton: 'Descubra o poder de Lis agora',
    url: '/signup',
    width: 500,
    height: 500,
    priority: true,
  },
  {
    id: '2',
    title: 'Conexões para todos os aspectos da sua vida',
    text: 'Nosso aplicativo vai além dos relacionamentos românticos, oferecendo suporte para encontrar amigos, colegas de trabalho e fortalecer laços familiares. Com essa abordagem ampla, ajudamos você a estabelecer conexões significativas em todos os aspectos da sua vida, criando uma rede de apoio mais rica e diversificada.',
    textButton: 'Explore as possibilidades',
    url: '/signup',
    width: 500,
    height: 500,
    image: '/images/home/image_2.jpg',
    directionMd: 'row-reverse',
  },
  {
    id: '3',
    title: 'Conexões com base em interesses e personalidade',
    text: 'Nosso aplicativo vai além das fotos de perfil, considerando uma ampla gama de interesses e hobbies, como gostos musicais, curtidas e outros. Além disso, a análise de personalidade por meio do teste MBTI, valores, interesses comuns, experiências de vida e objetivos compartilhados, permite que você encontre pessoas verdadeiramente compatíveis. Descubra conexões significativas, construídas com base em uma compreensão mais profunda de quem você é e do que você busca.',
    image: '/images/home/image_3.jpg',
    url: '/signup',
    width: 500,
    height: 500,
    textButton: 'Encontre conexões autênticas',
  },
  {
    id: '4',
    title: 'Perfis verificados para uma experiência mais segura',
    text: 'Nós nos preocupamos profundamente com a segurança dos nossos usuários. Por isso, todos os perfis em nosso aplicativo passam por um processo de verificação para garantir a autenticidade e a confiabilidade dos membros da nossa comunidade. Com essa abordagem, você pode ter mais certeza de que está interagindo com pessoas reais e genuínas, criando conexões em um ambiente mais seguro e protegido.',
    textButton: 'Desfrute de uma experiência segura',
    url: '/signup',
    width: 500,
    height: 500,
    image: '/images/home/image_4.jpg',
    directionMd: 'row-reverse',
  },
  {
    id: '5',
    title: 'Economize tempo com recomendações personalizadas',
    text: 'Com nosso aplicativo, não é necessário perder horas deslizando perfis para a esquerda ou direita em busca de um relacionamento. A inteligência artificial Lis aprende suas preferências e recomenda perfis compatíveis com base em seus interesses e personalidade. Desfrute de uma abordagem mais eficiente para encontrar conexões significativas, permitindo que você dedique seu tempo a interações de qualidade e ao desenvolvimento de relacionamentos verdadeiros.',
    image: '/images/home/image_5.jpg',
    url: '/signup',
    width: 500,
    height: 500,
    textButton: 'Encontre compatibilidade',
  },
]

export const items: LandingPageItems = {
  layout,
  nextCallToActionItems,
}
