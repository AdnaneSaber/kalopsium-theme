import Link from 'next/link'
import React from 'react'
import Logoe from "@Assets/store.svg";
import Image from 'next/image';

const Logo: React.FC<React.LinkHTMLAttributes<HTMLLinkElement>> = (props) => {

    return (

        <Link href="/">
            <a className={"flex items-center my-2 text-2xl p-2 font-semibold text-gray-900 dark:text-white " + (typeof props.className !== 'undefined' ? props.className : '')}>
                <Image
                    src={Logoe.src}
                    width={50}
                    height={50}
                    alt="Kalopsium store"
                />
                <span className='flex-col flex relative'>
                    Kalopsium
                    <small className='self-end font-thin text-sm absolute -bottom-2 right-0 m-0 leading-none'>store</small>
                </span>
            </a>
        </Link>
    )
}

export default Logo