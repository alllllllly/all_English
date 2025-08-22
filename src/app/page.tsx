"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";
import Head from "next/head";

export default function Home() {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>All english｜All project</title>
        <meta name="description" content="Welcome to All english!"></meta>
      </Head>
      <div>
        <div className={styles.banner}>
          <Image src="/banner.png" alt="banner" width={300} height={100} />
        </div>
        <div className={styles.tabs}>
          <button
            className={styles.tab}
            onClick={() => router.push("/")}
          >
            Home
          </button>
          <button
            className={styles.tab}
            onClick={() => router.push("/lessons")}
          >
            Lessons
          </button>
        </div>
        <div className={styles.area}>
          <div className={styles.welcome}>
            Welcome to ALL ENGLISH!
          </div>
          <div className={styles.info}>
            ※この教材はZ会発行の『中学英文法Fine 改訂版』を参考に作成しています。
          </div>
          <div className={styles.info}>
            ※現在、Unit8のLesson1のみが利用可能となっております。<br />
            他のLessonは利用できませんのでご注意ください。
          </div>
        </div>
      </div>
    </>
  );
}
