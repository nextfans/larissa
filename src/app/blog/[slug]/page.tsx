import { NextLayout } from '../../../components/templates/NextLayout'
import { Asset } from '../../../graphql/generated'
import { Box, Container, Heading, Text } from '@chakra-ui/react'
import Image from 'next/image'
import {
  BlogAuthor,
  BlogTags,
} from '../../../components/organisms/NextArticleList'
import { NextProse } from '../../../components/atoms/NextProse'
import { layout } from '../../../data'
import { notFound } from 'next/navigation'

interface Picture {
  url: string
  height: number
  width: number
}

interface Author {
  id: string
  name: string
  title: string
  picture: Picture
}

interface CoverImage {
  id: string
  url: string
  height: number
  width: number
}

interface Content {
  html: string
}

interface Seo {
  description: string
  keywords: string[]
  id: string
}

interface Post {
  id: string
  author: Author
  createdAt: string
  date: string
  excerpt: string
  slug: string
  stage: string
  tags: string[]
  title: string
  updatedAt: string
  coverImage: CoverImage
  content: Content
  seo: Seo
}

async function getProduct(slug: string) {
  const response = await fetch(
    'https://api-sa-east-1.hygraph.com/v2/cla8hu6xn0t2y01umbdl26klh/master',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        query: `{
            posts(where: { slug: "${slug}"}) {
              id
              author {
                id
                name
                title
                picture {
                  url
                  height
                  width
                }
              }
              createdAt
              date
              excerpt
              slug
              stage
              tags
              title
              updatedAt
              coverImage {
                id
                url
                height
                width
              }
              content {
                html
              }
              seo {
                description
                keywords
                id
              }
            }
          }`,
        variables: {
          slug,
        },
      }),
    },
  )
  const { data } = await response.json()
  return data.posts[0] as Post
}

export default async function BlogPage({
  params,
}: {
  params: { slug: string }
}) {
  const slug = params.slug
  const post = await getProduct(slug)

  if (!post) notFound()

  const { date, title, seo, coverImage, content, author, tags } = post

  const dateBlog = new Date(date)

  return (
    <NextLayout
      isRouterProtect={false}
      title={`NeXTIME | ${title}`}
      description={seo?.description as string}
      keywords={seo?.keywords}
      pathname={`/blog/${slug}`}
      socialImageUrl={coverImage?.url ?? layout.socialImageUrl}
    >
      <Container maxW="container.md" pb={6}>
        {coverImage && coverImage.width && coverImage.height && (
          <Image
            width={736}
            height={736}
            alt={title}
            src={coverImage.url}
            priority
          />
        )}
        <Heading pt={6}>{title}</Heading>
        <Text textAlign={'center'}>{dateBlog.toLocaleDateString()}</Text>
        <NextProse
          dangerouslySetInnerHTML={{
            __html: String(content?.html),
          }}
        ></NextProse>

        {author && author.picture && (
          <BlogAuthor
            image={author.picture as Asset}
            name={author.name}
            date={dateBlog}
            title={author.title as string}
          />
        )}
        {tags && (
          <Box pt={6} pb={2}>
            <BlogTags tags={tags} />
          </Box>
        )}
      </Container>
    </NextLayout>
  )
}
