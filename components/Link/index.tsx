import React from 'react'
import Link from 'next/link'


// Type for the props of the component
type Props = {
    children: React.ReactNode;
    path: string
}

const CustomLink = ({ path, children }: Props) => {
    return (
        <Link href={path}>
            <a className="text-sm font-medium text-gray-900 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-500">{children}</a>
        </Link>
    )
}

export default CustomLink