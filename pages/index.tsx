import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Prisma } from "@prisma/client";
import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import Landing from "components/Landing";
import { PillShow, Sidebar, Products } from "components";

const Home: NextPage = () => {
  const [user, setUser] = useState<Prisma.UserCreateInput>();
  const [output, setOutput] = useState<Prisma.UserCreateInput>();
  const createUser = async () => {
    const res = await axios.post("/api/user", {
      body: JSON.stringify({ user }),
    });
    const u = await res.data;
    console.log(u);
    setOutput(u.user);
  };
  return (
    <>
      <Head>
        <title>Welcome to Kalopsium Shop</title>
      </Head>
      {/*  */}
      <Landing />
      <PillShow />
      <section className="flex">
        <div
          id="sideFilter"
          className="p-5 max-w-xs w-full border-r dark:border-gray-700 hidden md:block"
        >
          <Sidebar />
        </div>
        <div className="p-5 w-full flex justify-center">
          <Products />
        </div>
      </section>
    </>
  );
};

export default Home;
