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
      title=""
      description=""
      keywords={['larissasumpani']}
      pathname="/novidades"
    >
      <NextArticleList posts={posts} />
    </NextLayout>
  )
}
