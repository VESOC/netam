import SEO from '@/components/SEO'
import Nav from '@/components/Nav'
import ThemeToggleBtn from '@/components/ThemeToggleBtn'
import { useState, useEffect, ReactNode } from 'react'
import { MetaData } from '@/lib/types'

interface PageProps {
    children: ReactNode
    meta: MetaData
}

export default function BaseLayout({ children, meta }: PageProps) {
    const [mounted, setMounted] = useState(false)
    useEffect(() => setMounted(true), [])
    return (
        <div>
            <SEO meta={meta} />
            <div className='flex flex-col md:flex-row'>
                <Nav />
                <main
                    id='skip'
                    className='lg:mt-0 mt-14 flex flex-col justify-center items-center w-3/4 h-screen mx-auto  bg-light dark:bg-dark'
                >
                    {children}
                </main>
            </div>
            <ThemeToggleBtn mounted={mounted} />
        </div>
    )
}
