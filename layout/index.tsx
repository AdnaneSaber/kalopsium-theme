import React from 'react'
import Header from './Header'

const Layout: React.FC<any> = ({ children }) => {
    return (
        <div className='bg-gray-50 dark:bg-gray-900'>
            <Header />
            {children}
        </div>
    )
}

export default Layout