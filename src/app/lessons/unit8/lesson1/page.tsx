"use client";
import Image from "next/image";
import main_styles from "../../../page.module.css";
import unit_stlyes from "../page.module.css";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Head from "next/head";

export default function Home() {
  const router = useRouter();
  const [opened, setOpened] = useState<number[]>([0, 0, 0]);

  const toggleOpened = (qIndex: number) => {
    setOpened(prev => {
      const next = [...prev];
      next[qIndex] = next[qIndex] ? 0 : 1;
      return next;
    });
  };

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
          <div className={unit_stlyes.title}>
            Unit8 文の種類と文型<br />
            Lesson1 文型の基本
          </div>
          <div className={unit_stlyes.chapter}>
            1.概要確認
          </div>
          <div className={unit_stlyes.image}>
            <Image src="/8-1/文型の基本.png" alt="文型の基本" width={700} height={394} />
          </div>
          <div className={unit_stlyes.point}>
            ・色のついた四角は絶対に必要な要素<br />
            ・白色の四角に副詞等で詳細を付け加える
          </div>
          <div className={unit_stlyes.chapter}>2.問題チェック</div>
          <div className={unit_stlyes.quest_big}>次の英文と同じ文型の英文を選びなさい。</div>
          <div className={unit_stlyes.quest_small}>(1) Shuto is a soccer player.</div>
          <div className={unit_stlyes.choice}>① Manabu learns Spanish.</div>
          <div className={unit_stlyes.choice}>② Kana and Utaha became singers.</div>
          <div className={unit_stlyes.choice}>③ Kyoko lives in Kyoto.</div>
          <button
            className={unit_stlyes.ans}
            onClick={() => toggleOpened(0)}
          >
            ▼答えを見る
          </button>
          <div className={`${unit_stlyes.descr} ${opened[0] ? "" : unit_stlyes.hidden}`}>
            正解:②<br />
            問題文 Shuto is a soccer player.
            <div className={unit_stlyes.image}>
            <Image src="/8-1/q1-0.png" alt="q1-0" width={650} height={100}></Image>
            </div>
            ① Manabu learns Spanish.
            <div className={unit_stlyes.image}>
            <Image src="/8-1/q1-1.png" alt="q1-1" width={650} height={100}></Image>
            </div>
            ② Kana and Utaha became singers.
            <div className={unit_stlyes.image}>
            <Image src="/8-1/q1-2.png" alt="q1-2" width={650} height={100}></Image>
            </div>
            ③ Kyoko lives in Kyoto.
            <div className={unit_stlyes.image}>
            <Image src="/8-1/q1-3.png" alt="q1-3" width={650} height={100}></Image>
            </div>
          </div>
          <div className={unit_stlyes.quest_small}>(2) The news made Kanata excited.</div>
          <div className={unit_stlyes.choice}>① I gave Mitsuo the watch on his birthday.</div>
          <div className={unit_stlyes.choice}>② Aoi was sad when she heard the song.</div>
          <div className={unit_stlyes.choice}>③ I believe Daisuke honest.</div>
          <button
            className={unit_stlyes.ans}
            onClick={() => toggleOpened(1)}
          >
            ▼答えを見る
          </button>
          <div className={`${unit_stlyes.descr} ${opened[1] ? "" : unit_stlyes.hidden}`}>
            正解:③<br />
            問題文 The news made Kanata excited.
            <div className={unit_stlyes.image}>
            <Image src="/8-1/q2-0.png" alt="q2-0" width={650} height={100}></Image>
            </div>
            ① I gave Mitsuo the watch on his birthday.
            <div className={unit_stlyes.image}>
            <Image src="/8-1/q2-1.png" alt="q2-1" width={650} height={100}></Image>
            </div>
            ② Aoi was sad when she heard the song.
            <div className={unit_stlyes.image}>
            <Image src="/8-1/q2-2.png" alt="q2-2" width={650} height={100}></Image>
            </div>
            ③ I believe Daisuke honest.
            <div className={unit_stlyes.image}>
            <Image src="/8-1/q2-3.png" alt="q2-3" width={650} height={100}></Image>
            </div>
          </div>
          <div className={unit_stlyes.quest_small}>(3) My friends have already finished their homework.</div>
          <div className={unit_stlyes.choice}>① I found the homework very difficult.</div>
          <div className={unit_stlyes.choice}>{"② I'm too tired to do my homework."}</div>
          <div className={unit_stlyes.choice}>{"③ To tell the truth, I didn't do my homework during July."}</div>
          <button
            className={unit_stlyes.ans}
            onClick={() => toggleOpened(2)}
          >
            ▼答えを見る
          </button>
          <div className={`${unit_stlyes.descr} ${opened[2] ? "" : unit_stlyes.hidden}`}>
            正解:③<br />
            問題文 My friends have already finished their homework.
            <div className={unit_stlyes.image}>
            <Image src="/8-1/q3-0.png" alt="q3-0" width={650} height={100}></Image>
            </div>
            ① I found the homework very difficult.
            <div className={unit_stlyes.image}>
            <Image src="/8-1/q3-1.png" alt="q3-1" width={650} height={100}></Image>
            </div>
            ② I'm too tired to do my homework.
            <div className={unit_stlyes.image}>
            <Image src="/8-1/q3-2.png" alt="q3-2" width={650} height={100}></Image>
            </div>
            ③ To tell the truth, I didn't do my homework during July.
            <div className={unit_stlyes.image}>
            <Image src="/8-1/q3-3.png" alt="q3-3" width={650} height={100}></Image>
            </div>
          </div>
          <br />
          <button
            className={unit_stlyes.finish}
            onClick={() => {
              if (window.confirm("レッスンを終了しますか？")) {
                router.push("/lessons");
              }
            }}
          >
            学習を終える
          </button>
        </div>
      </div>
    </>
  );
}
