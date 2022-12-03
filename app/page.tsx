import Image from "next/image";

import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          This is the website I&apos;m using to participate in{" "}
          <a href="https://react.holiday/">React Holiday 2022!</a>
        </h1>

        <p className={styles.description}>
          You can follow my progress on GitHub:{" "}
          <a href="https://github.com/mknepprath/react-holiday-2022">
            mknepprath/react-holiday-22
          </a>
          .
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/blog/next-13" className={styles.card}>
            <h2>Next 13 &rarr;</h2>
            <p>Read about the recent updates.</p>
          </a>

          <a href="https://discord.gg/lunchdev" className={styles.card}>
            <h2>Discord &rarr;</h2>
            <p>Join the conversation in Discord.</p>
          </a>

          <a
            href="https://mastodon.social/@mknepprath"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.card}
          >
            <h2>Mastodon &rarr;</h2>
            <p>Follow me on Mastodon. Why not?</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
