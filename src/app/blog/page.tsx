import { NextArticleList } from '../../components/organisms/NextArticleList'
import { NextLayout } from '../../components/templates/NextLayout'
import { Post } from '../../graphql/generated'
import { client } from '../../lib/apollo'
import { gql } from 'graphql-tag'

async function getPost() {
  const GET_POSTS_QUERY = gql`
    query GetPosts {
      posts(orderBy: createdAt_DESC) {
        id
        slug
        date
        tags
        excerpt
        title
        author {
          id
          name
          picture {
            id
            url
          }
          title
        }
        coverImage {
          url
        }
      }
    }
  `
  const { data } = await client.query({
    query: GET_POSTS_QUERY,
  })
  return data.posts as Post[]
}

export default async function Blog() {
  const posts = await getPost()
  return (
    <NextLayout
      isRouterProtect={false}
      title="Blog NeXTIME | Tecnologia, Inovação e Dicas"
      description="Descubra o blog da NeXTIME, onde compartilhamos insights sobre tecnologias inovadoras e soluções que economizam tempo, melhoram a vida e impulsionam a mudança no mundo."
      keywords={[
        'nextime',
        'tecnologia',
        'blog',
        'economizar tempo',
        'dicas',
        'produtividade',
        'software',
        'soluções',
        'desenvolvimento',
        'educação',
      ]}
      pathname="/blog"
    >
      <NextArticleList posts={posts} />
    </NextLayout>
  )
}
