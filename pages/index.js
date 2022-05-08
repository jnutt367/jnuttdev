import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>JNuttDev Portfolio Website</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
      <p>Hi I'm</p>
      <h1 className="text-3xl ml-10 mr-10 font-serif font-bold ">
      <Image
          src="/jason_waving.jpg"
          alt="Hero Image"
          height={150}
          width={150}
          className="absolute bz-0 rounded-b-full rounded-t-full"
        />
          Jason_Nutt <a className={styles.title} href="">[a] MERN Developer!</a>
         
        </h1>

        <p className={styles.description}>
          I build most projects with <code className={styles.code}>Next.js {' '}</code> &
          <code className={styles.code}>MongoDB.</code>
          I have studied  <code className={styles.code}>javascript HTML5 CSS3 React/Next.js {' '}</code> &
          <code className={styles.code}>MongoDB</code>
          in various platforms & built with the Technologies that were the most intuitive to me and had the most opportunity for me to grow.
          <code className={styles.code}>FrontEnd Tech Degree from Team Treehouse {' '}</code>
          <code className={styles.code}>Currently Attending MongoDB University{' '}</code>
        </p>
        <code className={styles.code}>Here are a few things I have built for Small Businesses & side projects{' '}</code>
        

        <div className={styles.grid}>
          <a href="https://jnutt367.github.io/RESOLUTIONS/" className={styles.card}>
            <h2>GSAP3 SVG animation Project &rarr;</h2>
            <Image
          src="/resolutions.jpg"
          alt="Hero Image"
          layout="responsive"
          height={200}
          width={200}
          className="absolute bz-0 rounded-b-full rounded-t-full"
        />
            <p>A project built with SVG & Timelines in GSAP3 [a] javaScript animation library</p>
          </a>

          <a href="https://waggin-rights.vercel.app/" className={styles.card}>
            <h2>Waggin' Rights &rarr;</h2>
            <Image
          src="/waginnrights.jpg"
          alt="Hero Image"
          layout="responsive"
          height={200}
          width={200}
          className="absolute bz-0"
        />
         <p>A new small business site for Emily Griffith for Pet Sitting. Also built with Next.js and Tailwindcss</p>
          
          
          </a>

          <a
            href="https://estore-swart.vercel.app/"
            className={styles.card}
          >
            <h2>An E-Commerce Example &rarr;</h2>
            <Image
          src="/technutt.jpg"
          alt="Hero Image"
          layout="responsive"
          height={200}
          width={200}
          className="absolute bz-0"
        />
            <p>TechNutt is an E-Commerce tech store built with Next.js & MongoDB Realm</p>
          </a>

          <a
            href="https://teamtreehouse.com/profiles/jdnutt"
            className={styles.card}
          >
            <h2>Treehouse Credentials &rarr;</h2>
            <Image
          src="/treehouse.jpg"
          alt="Hero Image"
          layout="responsive"
          height={200}
          width={200}
          className="absolute bz-0"
        />
            <p>
              These are the Treehouse courses I took to earn my Frontend Tech Degree
            </p>
          </a>


          <a href="https://jnutt367.github.io/RESOLUTIONS/" className={styles.card}>
            <h2>Project 1 &rarr;</h2>
            <Image
          src="/resolutions.jpg"
          alt="Hero Image"
          layout="responsive"
          height={200}
          width={200}
          className="absolute bz-0 rounded-b-full rounded-t-full"
        />
            <p>This will be my favorite project. Most likely the E-Store or the Character app</p>
          </a>

          <a href="" className={styles.card}>
            <h2>Project 2 &rarr;</h2>
            <Image
          src="/jason_waving.jpg"
          alt="Hero Image"
          layout="responsive"
          height={200}
          width={200}
          className="absolute bz-0 rounded-b-full rounded-t-full"
        />
            <p>This will be my 2nd favorite project. Mayb e the animations all in one</p>
          </a>

          <a
            href=""
            className={styles.card}
          >
            <h2>Project 3 &rarr;</h2>
            <Image
          src="/jason_waving.jpg"
          alt="Hero Image"
          layout="responsive"
          height={200}
          width={200}
          className="absolute bz-0 rounded-b-full rounded-t-full"
        />
            <p>This will hold the Site I'm making for Emily Griffith right now for Pet Sitting.</p>
          </a>

          <a
            href=""
            className={styles.card}
          >
            <h2>Project 4 &rarr;</h2>
            <Image
          src="/jason_waving.jpg"
          alt="Hero Image"
          layout="responsive"
          height={200}
          width={200}
          className="absolute bz-0 rounded-b-full rounded-t-full"
        />
            <p>
              I'll put the alternate project that I did not use for Project 1 in here
            </p>
          </a>





        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
