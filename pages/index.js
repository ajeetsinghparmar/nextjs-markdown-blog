import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Head from 'next/head'
import Post from '../components/Post'
import {sortByDate} from '../utils'


export default function Home({posts}) {
  return (
    <div >
      <Head>
        <title>Learn With Ajeet</title>
      </Head>

      <div className="posts">
        {posts.map((post, index) => (
          <Post key={index} post={post} />
        ))}
      </div>

    </div>
  )
}

export async function getStaticProps() {
  // Get files from post dir
  const files = fs.readdirSync(path.join('posts'))

  // Get slug and frontmatter from posts
  const posts = files.map(filename => {
    // Create slug
    const slug = filename.replace('.md','')

    // Get front matter
    const markDownWithMeta = fs.readFileSync(path.join('posts', filename), 'utf-8')

    const {data:frontmatter} = matter(markDownWithMeta)

    return {
      slug,
      frontmatter
    }
  })


  return {
    props: {
      posts: posts.sort(sortByDate),
    },
  }
}