import image from 'next/image'
import { LandingPageItems, Layout } from '../@types/LandingPageItems'
import { NextCallToActionProps } from '../components/organisms/NextCallToAction'

export const url =
  process.env.NEXT_PUBLIC_SITE_URL || 'https://club.nextime.com.br'
const siteName = 'Larissa'

export const layout: Layout = {
  title: `${siteName} | Encontre conexões além das aparências`,
  url,
  description: '',
  keywords: ['Aplicativo de relacionamento'],
  siteName,
  socialTitle: `${siteName} | Encontre conexões além das aparências`,
  socialImageUrl: `${url}/images/social_image.jpg`,
  socialNetwork: `https://api.whatsapp.com/send?phone=5511972436305&text=Ol%C3%A1,%20${siteName}.%20`,
  logoSrc: '/images/logos/logo_500.png',
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
    title: 'Bem vindo ao meu mundo: colorido, safado e feito pra você!',
    text: 'Campeã MissBumbum 2023 🏆🍑. Larissa Sumpani, representante do estado de Minas Gerais, foi eleita a "Miss Bumbum 2023". A criadora de conteúdo para o OnlyFans de 24 anos usou um biquíni feito de carne inspirado em Lady Gaga e recebeu 170 votos e superou a concorrência de 12 candidatas finalistas ao posto de dona do bumbum mais bonito do Brasil.',
    textButton: 'Encontre todas as plataformas',
    url: 'https://larisumpani.com/',
    width: 500,
    height: 500,
    image: '/images/home/image_0.jpg',
    priority: true,
    directionMd: 'row-reverse',
  },
  {
    id: '1',
    title: 'Rifa Lari Sumpani',
    text: 'Já pensou em encontrar com a Lari, com todas as despesas pagas e ter a oportunidade (se você conseguir conquista-la) de levar ela pra um after a sós? Seu sonho está a um passo de se tornar realidade. Cada número representa uma chance de conhecer ela! Quanto mais comprar, mais chances terá de ganhar. Então escolhe seu(s) preferidos e boa sorte! 🍀',
    image: '/images/home/image_1.jpg',
    textButton: 'Descubra o poder de Lis agora',
    url: '/signup',
    width: 500,
    height: 500,
    priority: true,
  },
  {
    id: '2',
    title: 'Descubra as últimas novidades!',
    text: 'Você é um fã de Larissa Sumpani? Quer saber como é o dia a dia dela, suas opiniões sobre tópicos atuais e o que ela está pensando em fazer a seguir? Não perca mais tempo! Obtenha acesso exclusivo a atualizações regulares e conteúdo inédito"',
    textButton: 'Clique e saiba mais!',
    url: '/novidades',
    width: 500,
    height: 500,
    image: '/images/home/image_2.jpg',
    directionMd: 'row-reverse',
  },
  {
    id: '3',
    title: 'Criamos o Tinder exclusivo da Lari',
    text: 'Está em busca de uma conexão verdadeira com Larissa Sumpani? O aplicativo exclusivo que desenvolvemos oferece essa chance única. Dê match e, caso haja reciprocidade, você será um dos poucos privilegiados a conversar com ela no WhatsApp. Quem sabe, isso pode até levar a um encontro ao vivo. Descubra como fazer parte desta experiência exclusiva!',
    image: '/images/home/image_3.jpg',
    url: '/signup',
    width: 500,
    height: 500,
    textButton: 'Clique aqui',
  },
  {
    id: '4',
    title: 'Confira Prévias Gratuitas de Larissa Sumpani!',
    text: 'Minhas prévias são a forma perfeita de você experimentar um pouco dessa experiência única. E o melhor de tudo, é totalmente grátis. Descubra agora mesmo!"',
    textButton: 'Acessar Prévias',
    url: 'https://t.me/eusumpani',
    width: 500,
    height: 500,
    image: '/images/home/image_4.jpg',
    directionMd: 'row-reverse',
  },
  // {
  //   id: '5',
  //   title: 'Economize tempo com recomendações personalizadas',
  //   text: 'Com nosso aplicativo, não é necessário perder horas deslizando perfis para a esquerda ou direita em busca de um relacionamento. A inteligência artificial Lis aprende suas preferências e recomenda perfis compatíveis com base em seus interesses e personalidade. Desfrute de uma abordagem mais eficiente para encontrar conexões significativas, permitindo que você dedique seu tempo a interações de qualidade e ao desenvolvimento de relacionamentos verdadeiros.',
  //   image: '/images/home/image_5.jpg',
  //   url: '/signup',
  //   width: 500,
  //   height: 500,
  //   textButton: 'Encontre compatibilidade',
  // },
]

export const items: LandingPageItems = {
  layout,
  nextCallToActionItems,
}
