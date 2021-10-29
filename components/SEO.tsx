import Head from 'next/head'
import { useRouter } from 'next/router'
import { MetaData } from '@/lib/types'

interface PageProps {
    meta: MetaData
}

export default function SEO({ meta }: PageProps) {
    const router = useRouter()
    return (
        <Head>
            <meta
                name='robots'
                content={meta?.nofollow ? 'nofollow, noindex' : 'follow, index'}
            />
            <link
                rel='canonical'
                href={`${process.env.NEXT_PUBLIC_BASE_URL}${router.asPath}`}
            />
            <title>{meta?.title}</title>
            <meta content={meta?.description} name='description' />
            <meta
                property='og:url'
                content={`${process.env.NEXT_PUBLIC_BASE_URL}${router.asPath}`}
            />
            <meta
                property='og:type'
                content={
                    router.asPath.startsWith('/blog') ? 'article' : 'website'
                }
            />
            <meta property='og:description' content={meta?.description} />
            <meta
                property='og:locale'
                content={meta?.language ? meta.language : 'ko_KR'}
            />
            <meta property='og:title' content={meta?.title} />
            {meta?.image && (
                <meta
                    property='og:image'
                    content={`${process.env.NEXT_PUBLIC_BASE_URL}${meta?.image}`}
                />
            )}
            {meta?.date && (
                <meta
                    property='article:published_time'
                    content={new Date(meta?.date).toISOString()}
                />
            )}
        </Head>
    )
}
