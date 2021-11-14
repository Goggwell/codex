
import dynamic from 'next/dynamic'
import React, { useContext } from 'react'
import Link from 'next/link'

const ThemeToggle = dynamic(() => import('../components/ThemeToggle'), {
    ssr: false,
  });

const categories = [{ name: 'React', slug: 'react' }, { name: 'Web Development', slug: 'web-dev' }]

const Header = () => {
    return (
        <nav className="nav wrapper">
            <Link href="/">
                <a className="nav__home">
                    <span>Sam's Codex</span>
                </a>
            </Link>
            <ul className="nav__items">
                {categories.map((category) => (
                    <li className="nav__item">
                        <Link key={category.slug} href={`/category/${category.slug}`}>
                            <a className="nav__item--link">
                                {category.name}
                            </a>
                        </Link>
                    </li>
                ))}
                <li className="nav__item" key="toggle">
                    <ThemeToggle />
                </li>
            </ul>
        </nav>
    )
}

export default Header
