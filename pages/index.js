import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Layout from "@/components/Layout";
const inter = Inter({ subsets: ["latin"] });
import Homepage from "@/components/Homepage";
import About from "@/components/About";

export default function Home() {
  return (
    <>
      {/* <Layout> */}
      <Homepage />
      <About />
      {/* </Layout> */}
    </>
  );
}
