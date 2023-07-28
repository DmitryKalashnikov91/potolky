import React, { useState } from 'react'
import Link from 'next/link'
import styles from './Header.module.scss'
import { useDeviceSize } from '../../../hooks/useDeviceSize'
import MobileHeader from './MobileHeader'

export type categories = {
    id: string,
    path: string
}

export type navLinks = {
    title: string,
    id: number,
    path: string,
    category?: categories[]

}

 export const links: navLinks[] = [
    {
        id: 1322,
        title: 'Главная',
        path: '/'
    },
    {
        id: 2324,
        title: 'Каталог',
        path: '/catalogue',
        category: [{id: 'sqsq1', path: '/dscs'}, {id: 'assss', path: '/sdd'}, {id: 'assss', path: '/aaa'}]
    },
    {
        id: 3112,
        title: 'Монтаж',
        path: '/montage'
    },
    {
        id: 41234,
        title: 'Освещение',
        path: '/technologies'
    },
    {
        id: 56527,
        title: 'Фотопечать (фотобанк)',
        path: '/photobank'
    },
    {
        id: 532435,
        title: 'Стоимость',
        path: '/price'
    },
    {
        id: 6234,
        title: 'Отзывы',
        path: '/reviews'
    },
]

export const Header = (props: navLinks): JSX.Element => {
const [isOpenMenu, setIsOpenMenu] = useState(false)
const [width, height] = useDeviceSize()
const handleOpenMenu = () => {
    setIsOpenMenu((prev) => !prev)
}
  return (
    <header className={styles.Header}>
        {width > 950  ? (<nav>
            <ul className={styles.Header_links}>
                {links.map(({id, title, path}) => (
                    <li key={id}><Link href={path}>{title}</Link></li>
                ))}
                <li key='phone1223'>
                        <a href='tel:+79999152567'>+7 999 915 25 67</a>
                    </li>
            </ul>
        </nav>) : (
            <>
                <div className="space-y-2" onClick={handleOpenMenu}>
                    <div className="w-8 h-0.5 bg-gray-600"></div>
                    <div className="w-8 h-0.5 bg-gray-600"></div>
                    <div className="w-8 h-0.5 bg-gray-600"></div>   
                </div>
                {isOpenMenu && (<MobileHeader />)}
            </>
        )}
    </header>
  )
}

