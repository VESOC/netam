import {
    SiC,
    SiFlutter,
    SiPython,
    SiJavascript,
    SiNextdotjs,
    SiNodedotjs,
} from 'react-icons/si'
import BaseLayout from '@/components/BaseLayout'
import { SEOData } from '@/lib/types'

export default function Index() {
    const meta: SEOData = {
        title: 'VESOC | Student Developer/학생 개발자',
        description:
            'Studying NodeJS, Flutter, Python, Algorithm, Information Security | 노드, 플러터, 파이썬, 알고리즘, 정보보안 공부',
        date: '2022-01-01',
        coverImage: '/icons/LOGO.png',
    }
    return (
        <BaseLayout meta={meta}>
            <div className='flex flex-col lg:w-4/5 md:w-full sm:w-full md:px-2 sm:px-2 text-center items-center bg-gray-100 dark:bg-darkBody rounded-lg py-5 mx-auto my-10'>
                <div>
                    <h1 className='text-center'>
                        안녕하세요! 저는 💻VESOC입니다.
                    </h1>
                    <p>저는 프로그래밍 전반에 관심이 있는 학생입니다.</p>
                    <h2 className='text-center'>프로그래밍 스택:</h2>
                    <h3>언어:</h3>
                    <div className='flex flex-row justify-evenly px-5'>
                        <div className='px-10 py-3'>
                            <SiC size='40' color='#01589C' />
                        </div>
                        <div className='px-10 py-3'>
                            <SiPython size='40' color='#3A73A5' />
                        </div>
                        <div className='px-10 py-3'>
                            <SiJavascript size='40' color='yellow' />
                        </div>
                    </div>
                    <h3>기술:</h3>
                    <div className='flex flex-row justify-evenly px-5'>
                        <div className='px-10 py-3'>
                            <SiNodedotjs size='40' color='#73BF4F' />
                        </div>
                        <div className='px-10 py-3'>
                            <SiNextdotjs size='40' color='black' />
                        </div>
                        <div className='px-10 py-3'>
                            <SiFlutter size='40' color='#4ECFFC' />
                        </div>
                    </div>
                    <p className='whitespace-normal'>
                        현재는 <b>Go</b>를 배우고 있으며 최대한 다양한 언어와
                        기술을 접해보고 언젠가 완벽한 언어를 만들고 싶습니다.
                    </p>
                </div>
                <button
                    className='text-base text-lightBlue border-gray-700 active:border-green-200'
                    onClick={() => {
                        navigator.clipboard.writeText('contact@vesoc.dev')
                    }}
                >
                    contact@vesoc.dev
                </button>
            </div>
        </BaseLayout>
    )
}
