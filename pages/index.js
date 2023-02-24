import { Main } from "next/document";
import Link from "next/link";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Layout, { SITE_TITLE } from "../components/layout";

export default function Home() {
  return (
    <Layout home>
      <section className={styles.headingMd}>
        <p class="font-light text-gray-500 dark:text-gray-400">
          Hi, I'm{" "}
          <strong class="font-semibold text-gray-900 dark:text-white">
            Stephen
          </strong>
          . More commonly known as SWM (swim). I'm a software engineer,
          currently working for <em class="font-italic">$BIG_CORP</em>. I'm also
          but not limited to being a self confessed coffee snob, aspiring
          gardener, ever frustrated golfer and all round idiot.
        </p>
        <p class="mt-3 font-light text-gray-500 dark:text-gray-400">
          If you want to find out more about me, click&nbsp;
          <Link href="/about">here</Link>. Or if you want to contact me then
          send one of those fancy new electronic mail thingymajigs to me here.
        </p>
      </section>
    </Layout>
  );
}
