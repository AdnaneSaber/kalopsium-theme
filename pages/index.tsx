import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Prisma } from "@prisma/client";
import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

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
      <section className="lg:container">
        
      </section>

    </>
  );
};

export default Home;
