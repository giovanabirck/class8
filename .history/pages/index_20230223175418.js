import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'


export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.effect_one}>
          <Link href="/useEffectOne">
            <button className={styles.btn}>useEffectOne</button>
          </Link>
        </div>
        <div className={styles.effect_two}>
          <Link href="/useEffectTwo">
            useEffectTwo</Link>
        </div>
        <div className={styles.effect_three}>
          <Link href="/useEffectThree">useEffectThree</Link>
        </div>
        <div className={styles.carousel}>
          <Link href="/carouselPage">Carousel Page</Link>
        </div>
      </main>
    </>
  )
}
