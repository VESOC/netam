import Link from 'next/link'
import { useState, useEffect } from 'react'
import LOGO from '@/components/LOGO'
import { GoMarkGithub, GoRss } from 'react-icons/go'
import Search from '@/components/Search'
import AuthenticateBtn from '@/components/AuthenticateBtn'
import { useSession } from 'next-auth/react'

export default function Nav() {
    const { status } = useSession()
    const [isLargeScreen, setIsLargeScreen] = useState(false)
    const [toggleMenu, setToggleMenu] = useState(false)
    useEffect(() => {
        if (window.matchMedia('(max-width: 1023px)').matches) {
            setToggleMenu(false)
            setIsLargeScreen(false)
        } else {
            setToggleMenu(true)
            setIsLargeScreen(true)
        }
        window.addEventListener('resize', function () {
            if (window.matchMedia('(min-width: 1024px)').matches) {
                setToggleMenu(true)
                setIsLargeScreen(true)
            } else {
                setToggleMenu(false)
                setIsLargeScreen(false)
            }
        })
    }, [])

    return (
        <nav className='fixed lg:relative md:w-full sm:w-full lg:w-1/5 top-0 md:h-14 sm:h-14 lg:h-auto lg:min-h-screen z-50 bg-light dark:bg-dark'>
            <a href='#skip' className='sr-only focus:not-sr-only'>
                Skip to content
            </a>
            {!isLargeScreen && (
                <button
                    className='lg:hidden nav-btn'
                    onClick={() => setToggleMenu(!toggleMenu)}
                >
                    <LOGO customClass={'w-10 h-10'} />
                    <span className='sr-only'>Home-btn</span>
                </button>
            )}
            {toggleMenu && (
                <div className='lg:sticky lg:top-0 flex flex-col font-bold p-2 gap-y-2 bg-light dark:bg-dark z-50'>
                    <div className='flex flex-col justify-center items-center'>
                        <Link href='/'>
                            <a className='nav-link'>
                                <h1 className='text-black dark:text-white'>
                                    VESOC
                                </h1>
                            </a>
                        </Link>
                        <div className='flex flex-row gap-x-3 justify-center items-center'>
                            <a
                                href='https://www.github.com/VESOC'
                                target='_blank'
                                rel='noreferrer noopener'
                                className='text-black dark:text-white'
                            >
                                <GoMarkGithub />
                                <p className='sr-only'>Github</p>
                            </a>
                            <Link href='/feeds' passHref>
                                <a className='text-black dark:text-white'>
                                    <GoRss />
                                    <p className='sr-only'>RSS</p>
                                </a>
                            </Link>
                            <AuthenticateBtn />
                        </div>
                    </div>
                    <Search />
                    <div className='item'>
                        <Link href='/blog'>
                            <a className='nav-link'>Blog</a>
                        </Link>
                    </div>
                    {status === 'authenticated' && (
                        <div className='item'>
                            <Link href='/admin'>
                                <a className='nav-link'>Admin</a>
                            </Link>
                        </div>
                    )}
                </div>
            )}
        </nav>
    )
}
