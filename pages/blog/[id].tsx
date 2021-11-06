import BlogLayout from '@/components/BlogLayout'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import { components } from '@/components/MDXComponents'
import ToC from '@/components/ToC'
import { useEffect, useState } from 'react'
import { BlogMeta } from '@/lib/types'
import { GetStaticProps, GetStaticPaths } from 'next'
import { getPaths, getPost } from '@/lib/PostData'
interface PageProps {
    meta: BlogMeta
    content: MDXRemoteSerializeResult<Record<string, unknown>>
}

export default function Post({ meta, content }: PageProps) {
    const [renderToC, setRenderToC] = useState(false)
    useEffect(() => {
        setRenderToC(true)
    }, [])
    return (
        <BlogLayout meta={meta}>
            <h1>{meta.title}</h1>
            <p className='text-center text-black dark:text-white'>
                {meta.date} |{' '}
                <span className='text-blue-300'>{meta.readingTime}</span>분
            </p>
            {renderToC && <ToC />}
            <MDXRemote {...content} components={components} />
        </BlogLayout>
    )
}
interface Paths {
    params: {
        id: string
    }
}

export const getStaticPaths: GetStaticPaths = async () => {
    const paths: Paths[] = await getPaths()
    return {
        paths,
        fallback: false,
    }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    if (typeof params!.id !== 'string') {
        return { notFound: true }
    }
    const { meta, serializedContent: content } = await getPost(params!.id)
    if (meta!.published === false) {
        return { notFound: true }
    }
    return {
        props: {
            meta,
            content,
        },
    }
}
