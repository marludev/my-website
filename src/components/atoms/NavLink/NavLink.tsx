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
  const { pathname } = useRouter()
  const activate = pathname === href ? activateClassName : 'border-transparent'
  return (
    <NextLink href={href}>
      <a onClick={onClick} className={`${className} ${activate}`}>
        {children}
      </a>
    </NextLink>
  )
}

export { NavLink }
