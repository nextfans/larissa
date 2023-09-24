// app/sitemap.js

import { client } from '../lib/apollo'
import gql from 'graphql-tag'

export default async function sitemap() {
  const URL = 'https://club.nextime.com.br'
  const GET_POSTS_QUERY = gql`
    query GetPosts {
      posts(orderBy: createdAt_DESC) {
        slug
        date
      }
    }
  `

  const { data } = await client.query({
    query: GET_POSTS_QUERY,
  })

  const posts = data.posts.map(
    ({ slug, date }: { slug: string; date: string }) => ({
      url: `${URL}/novidades/${slug}`,
      lastModified: date,
    }),
  )

  const routes = ['', '/invite', '/login', '/subscription', '/novidades'].map(
    (route) => ({
      url: `${URL}${route}`,
      lastModified: new Date().toISOString(),
    }),
  )

  return [...routes, ...posts]
}
