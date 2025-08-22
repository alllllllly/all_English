"use client";
import Image from "next/image";
import main_styles from "../../../page.module.css";
import sub_stlyes from "./page.module.css";
import { useRouter } from "next/navigation";
import Head from "next/head";

export default function Home() {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Unit8 Lesson1｜All english｜All project</title>
        <meta name="description" content="Welcome to All english!"></meta>
      </Head>
      <div>
        <div className={main_styles.banner}>
          <Image src="/banner.png" alt="banner" width={300} height={100} />
        </div>
        <div className={main_styles.tabs}>
          <button
            className={main_styles.tab}
            onClick={() => {
              if (window.confirm("本当にレッスンを中断しますか？")) {
                router.push("/");
              }
            }}
          >
            Home
          </button>
          <button
            className={main_styles.tab}
            onClick={() => {
              if (window.confirm("本当にレッスンを中断しますか？")) {
                router.push("/lessons");
              }
            }}
          >
            Lessons
          </button>
        </div>
        <div className={main_styles.area}>
          
        </div>
      </div>
    </>
  );
}
