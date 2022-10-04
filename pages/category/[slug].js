import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Head from 'next/head'
import Post from '../../components/Post'
import {sortByDate} from '../../utils'
import { slugify } from '../../utils'


export default function Home({posts}) {
  return (
    <div >
      <Head>
        <title>Next Blog</title>
      </Head>

      <div className="posts">
        {posts.map((post, index) => (
          <Post key={index} post={post} />
        ))}
      </div>

    </div>
  )
}

export async function getStaticPaths() {
  // Get files from post dir
  const files = fs.readdirSync(path.join('posts'))

  let tempStorage = []

  // Get slug and frontmatter from posts
  const posts = files.map(filename => {

    // Get front matter
    const markDownWithMeta = fs.readFileSync(path.join('posts', filename), 'utf-8')

    const {data:frontmatter} = matter(markDownWithMeta)

    frontmatter.categories.map(
        category => {
            let slug = slugify(category)
            tempStorage.push({ params: {slug} });
        }
    )

  })

  const paths = tempStorage.filter((item, index) => {
    return tempStorage.indexOf(item) === index
})


  return {
    paths,
    fallback: false,
    }
  }

  export async function getStaticProps({params: {slug}}) {
    // Get files from post dir
    const files = fs.readdirSync(path.join('posts'))

    let tempStorage = []
  
    // Get slug and frontmatter from posts
    const tempPosts = files.map(filename => {
  
      // Get front matter
      const markDownWithMeta = fs.readFileSync(path.join('posts', filename), 'utf-8')
            
      const {data:frontmatter} = matter(markDownWithMeta)

      frontmatter.categories.map(
        category => {
            let categorySlug = slugify(category)
            if (slug === categorySlug) {
                tempStorage.push({slug: filename.replace('.md',''),frontmatter})
            }
        }
      )
    })
    
      const posts = tempStorage.filter(
        post => {
            return post && post
        }
      )

      return {
        props: {
            posts: posts.sort(sortByDate)
        }
      }
    }
  