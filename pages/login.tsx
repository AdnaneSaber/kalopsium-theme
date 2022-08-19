import Image from "next/image";
import React, { useEffect, useState } from "react";
import Google from "@Assets/google.svg";
import Link from "next/link";
import { Button, Hr } from "components";
import Logo from "components/Logo";
import axios from "axios";
import Router from 'next/router'
import { useSession, signIn, signOut } from "next-auth/react"

const Login = () => {
  const [email, setEmail] = useState("")
  const { data: session, status } = useSession()
  useEffect(() => {
    console.log(session)
  }, [session])

  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [remember, setRemember] = useState(false)
  const Authenticate = async (e: any) => {
    e.preventDefault()
    setLoading(true)
    setError("")
    const res = await axios.post("/api/auth/login", { email, password, duration: remember ? "30" : "0" })
    console.log(res)
    if (res.data.error) {
      setError(res.data.error)
    } else {
      if (remember) {
        localStorage.setItem("token", res.data.token)
      }
      return Router.push('/')
    }
  }
  return (
    status !== "authenticated" ? (
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <Logo className="my-7" />
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Sign in to your account
              </h1>
              <div className="flex gap-4 justify-between flex-col">
                <Button
                  type="submit"
                  onClick={() => signIn()}
                >
                  <Image
                    src={Google.src}
                    width={16}
                    height={16}
                    alt="Kalopsium store"
                  />
                  Sign in with Google
                </Button>
              </div>
              <Hr content="or" />
              <form className="space-y-4 md:space-y-6" action="#" onSubmit={Authenticate}>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="remember"
                        aria-describedby="remember"
                        type="checkbox"
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                        checked={remember}
                        onChange={(e) => setRemember(e.target.checked)}
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="remember"
                        className="text-gray-500 dark:text-gray-300"
                      >
                        Remember me
                      </label>
                    </div>
                  </div>
                  <Link href="/reset-password">
                    <a className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">
                      {"Forgot password?"}
                    </a>
                  </Link>
                </div>
                <Button type="submit" primary>
                  Sign in
                </Button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Don’t have an account yet?{" "}
                  <Link href="/register">
                    <a className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                      Sign up
                    </a>
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>) : (<div>
        <h1>{`Hello ${session.user?.name}`}</h1>
        <p>You are already logged in</p>

        <Button onClick={() => fetch('api/posts', { method: 'POST' })} primary className="max-w-sm">Fetch session</Button>
        <Button onClick={() => signOut()} primary className="max-w-sm">Sign out</Button>
      </div>)
  );
};
export default Login;
