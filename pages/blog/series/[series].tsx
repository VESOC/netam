import { getPaths } from '@/lib/PostData'
import { GetStaticPaths } from 'next'
import BlogLayout from '@/components/BlogLayout'
import Post from '@/components/Post'
import { BlogMeta, SEOData } from '@/lib/types'

export default function Series({
    series,
    data,
}: {
    series: string
    data: BlogMeta[]
}) {
    const meta: SEOData = {
        title: `${series}`,
        description: `Blog Page for series ${series} | ${series}를 위한 페이지`,
        date: '2022-01-01',
        coverImage: '/icons/LOGO.png',
    }
    return (
        <BlogLayout meta={meta}>
            <h1 className='top-2'>{series}</h1>
            <div className='w-full h-auto mx-auto grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 content-center items-center gap-2 justify-items-center p-4'>
                {data?.map((post: BlogMeta) => (
                    <Post key={post.id} post={post} />
                ))}
            </div>
        </BlogLayout>
    )
}

export async function getStaticProps({
    params,
}: {
    params: { series: string }
}) {
    const query = `
    query GetPostMetaData {
        metadatas (
            series: "${params.series}"
        ) {
            id
            title
            description
            date
            category
            series
            coverImage
        }
    }
`
    const data = await fetch(process.env.NEXTAUTH_URL + '/api/graphql', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query }),
    })
        .then((res) => res.json())
        .then((json) => {
            return json.data.metadatas
        })
    return {
        props: {
            series: params.series,
            data,
        },
    }
}

interface Paths {
    params: {
        series: string
    }
}
export const getStaticPaths: GetStaticPaths = async () => {
    const paths: Paths[] = await getPaths('series')
    return {
        paths,
        fallback: false,
    }
}
