// Dependencies
import React from 'react'
import NextLink from 'next/link'
import { useRouter } from 'next/router'
import { Iprops } from './type'

const NavLink: React.FC<Iprops> = ({
  href,
  activateClassName,
  className,
  children,
  onClick,
}) => {
  const router = useRouter()

  return (
    <NextLink href={href}>
      <a
        onClick={onClick}
        className={`${className} ${
          router.pathname === href ? activateClassName : ''
        }`}
      >
        {children}
      </a>
    </NextLink>
  )
}

export { NavLink }
