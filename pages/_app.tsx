import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { toggleTheme } from '@Utils'
import Layout from "layout";
// import session provider from next-auth
import { SessionProvider, useSession } from 'next-auth/react'

const pages_without_layout = ['/login', '/register', '/forgot-password', '/reset-password'];
function MyApp({ Component, pageProps: { session, ...pageProps }, ...appProps }: AppProps) {
  if (typeof window !== "undefined") {
    if (!localStorage.getItem('colorScheme')) {
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
        const newColorScheme = event.matches ? "dark" : "light";
        localStorage.setItem("colorScheme", newColorScheme);
      });
      localStorage.setItem("colorScheme", window.matchMedia('(prefers-color-scheme: dark)').matches ? "dark" : "light")
    }
    toggleTheme()
  }
  if (pages_without_layout.includes(appProps.router.pathname)) {
    return (
      <SessionProvider session={session}>
        <Component {...pageProps} {...appProps} />
      </SessionProvider>
    )
  }
  return (
    <SessionProvider session={session}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  )
}

export default MyApp
