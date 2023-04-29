'use client'
import Link from 'next/link'
import './GlobalStyles/menu.css'
import './Layout'
import { usePathname } from 'next/navigation'

export default function Menu () {
    const routerPath = usePathname()

    return (
        <div className="Menu">
            <div className={routerPath === '/' ? 'menu-item menu-item--active' : 'menu-item'}>
                <Link href="/">Home</Link>
            </div>
            <div className={routerPath === '/About' ? 'menu-item menu-item--active' : 'menu-item'}>
                <Link href='./About'>About</Link>
            </div>
            <div className={routerPath === '/Projects' ? 'menu-item menu-item--active' : 'menu-item'}>
                <Link href="./Projects">Projects</Link>
            </div>
            <div className={routerPath === '/Contact' ? 'menu-item menu-item--active' : 'menu-item'}>
                <Link href="./Contact">Contact</Link>
            </div>
        </div>
    )
}
