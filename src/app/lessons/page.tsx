"use client";
import Image from "next/image";
import main_styles from "../page.module.css";
import sub_styles from "./page.module.css";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Head from "next/head";

const units = [
  {
    label: "Unit0 まずはここをおさえよう!",
    color: "color0",
    content: () => (
      <div className={sub_styles.preparing}>準備中...</div>
    ),
  },
  {
    label: "Unit1 動詞",
    color: "color1",
    content: () => (
      <div className={sub_styles.preparing}>準備中...</div>
    ),
  },
  {
    label: "Unit2 助動詞",
    color: "color2",
    content: () => (
      <div className={sub_styles.preparing}>準備中...</div>
    ),
  },
  {
    label: "Unit3 疑問詞",
    color: "color3",
    content: () => (
      <div className={sub_styles.preparing}>準備中...</div>
    ),
  },
  {
    label: "Unit4 名詞と冠詞・代名詞",
    color: "color4",
    content: () => (
      <div className={sub_styles.preparing}>準備中...</div>
    ),
  },
  {
    label: "Unit5 形容詞と副詞",
    color: "color5",
    content: () => (
      <div className={sub_styles.preparing}>準備中...</div>
    ),
  },
  {
    label: "Unit6 接続詞",
    color: "color6",
    content: () => (
      <div className={sub_styles.preparing}>準備中...</div>
    ),
  },
  {
    label: "Unit7 前置詞",
    color: "color7",
    content: () => (
      <div className={sub_styles.preparing}>準備中...</div>
    ),
  },
  {
    label: "Unit8 文の種類と文型",
    color: "color1",
    content: (router: ReturnType<typeof useRouter>) => (
      <button
        className={sub_styles.lesson}
        onClick={() => router.push("/lessons/unit8/lesson1")}
      >
        Lesson1 文型の基本
      </button>
    ),
  },
  {
    label: "Unit9 不定詞と動名詞",
    color: "color2",
    content: () => (
      <div className={sub_styles.preparing}>準備中...</div>
    ),
  },
  {
    label: "Unit10 比較",
    color: "color3",
    content: () => (
      <div className={sub_styles.preparing}>準備中...</div>
    ),
  },
  {
    label: "Unit11 受動態",
    color: "color4",
    content: () => (
      <div className={sub_styles.preparing}>準備中...</div>
    ),
  },
  {
    label: "Unit12 現在完了",
    color: "color5",
    content: () => (
      <div className={sub_styles.preparing}>準備中...</div>
    ),
  },
  {
    label: "Unit13 分詞と関係代名詞",
    color: "color6",
    content: () => (
      <div className={sub_styles.preparing}>準備中...</div>
    ),
  },
  {
    label: "Unit14 仮定法",
    color: "color1",
    content: () => (
      <div className={sub_styles.preparing}>準備中...</div>
    ),
  },
  {
    label: "Unit15 発展学習",
    color: "color7",
    content: () => (
      <div className={sub_styles.preparing}>準備中...</div>
    ),
  },
];

export default function Home() {
  const router = useRouter();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <>
      <Head>
        <title>Lessons｜All english｜All project</title>
        <meta name="description" content="Welcome to All english!"></meta>
      </Head>
      <div>
        <div className={main_styles.banner}>
          <Image
            src="/banner.png"
            alt="bannner"
            width={300}
            height={100}
          />
        </div>
        <div className={main_styles.tabs}>
          <button
            className={main_styles.tab}
            onClick={() => router.push("/")}
          >
            Home
          </button>
          <button
            className={main_styles.tab}
            onClick={() => router.push("/lessons")}
          >
            Lessons
          </button>
        </div>
        <div className={main_styles.area}>
          {units.map((unit, idx) => (
            <div key={idx}>
              <button
                onClick={() =>
                  setOpenIndex(openIndex === idx ? null : idx)
                }
                style={{
                  width: "100%",
                  border: "none",
                  background: "none",
                  padding: 0,
                  cursor: "pointer",
                }}
              >
                <div
                  className={`${sub_styles.unit} ${sub_styles[unit.color]}`}
                  style={{ textAlign: "left" }}
                >
                  {unit.label}
                </div>
              </button>
              {openIndex === idx && unit.content(router)}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
