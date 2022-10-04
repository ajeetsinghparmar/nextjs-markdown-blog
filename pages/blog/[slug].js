import fs from 'fs'
import matter from 'gray-matter'
import Link from 'next/link'
import path from 'path'
import { marked } from 'marked'
import { useRouter } from 'next/router'

export default function PostPage({frontmatter: {title, categories, date, cover_image}, slug, content}) {

    const router = useRouter()

  return (
    <>
    <button className='btn btn-back' onClick={()=>router.back()}>
        <a>Go Back</a>
    </button>
    <div className="card card-page">
        <h1 className="post-title">{title}</h1>
        {categories.map((category, index) => (
        <div key={index} className="post-category" onClick={() => router.push(`/category/${category}`)}>{category}</div>
        ))}
        <div className="post-date">Posted on {date}</div>
        <img src={cover_image} alt="" />
        <div className="post-body">
            <div dangerouslySetInnerHTML={{__html: marked(content)}}></div>
        </div>
    </div>
    </>
  )
}

export async function getStaticPaths() {
    const files = fs.readdirSync(path.join('posts'))

    const paths = files.map(filename => ({
        params: {
            slug: filename.replace('.md', '')
        }
    }))


    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({params: {slug}}) {
    const markdownWithMeta = fs.readFileSync(path.join('posts', slug + '.md'), 'utf-8')

    const {data: frontmatter, content} = matter(markdownWithMeta)

    return {
        props: {
            frontmatter,
            slug,
            content
        }
    }
    
}