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
      <code className={styles.intro}>Hi I am</code>
      <h1 className="text-3xl ml-10 mr-10 font-serif font-bold ">
      
      <a className={styles.title} href="https://github.com/jnutt367"> Jason Nutt  MERN Developer</a>
         
        </h1>
      <div className={styles.pic}> 
        <a href="https://www.linkedin.com/in/jnuttlovedisciple/">
        <Image
          src="/undraw_developer_activity_re_39tg.svg"
          alt="Hero Image"
          height={400}
          width={900}
          className={styles.image}
        />

        </a>
        </div>
        <div className={styles.icons}>
        <a href="https://www.linkedin.com/in/jnuttlovedisciple/">
        <Image
          src="/LI-In-Bug.png"
          alt="Hero Image"
          height={50}
          width={50}
          className="absolute bz-0 mt-10"
        />
        </a>
        <a className={styles.github} href="https://github.com/jnutt367">
        <Image
          src="/github-octocat-logo-black-and-white.png"
          alt="Hero Image"
          height={50}
          width={50}
          className="absolute bz-0 rounded-b-full rounded-t-full"
        />
       
        </a>
        </div>
        <p className={styles.description}>
        <code className={styles.code}>I build most projects with Next.js {' '} & MongoDB.
           I have studied  
          javascript HTML5 CSS3 React/Next.js GSAP  &{' '}
         MongoDB
          in various platforms & built with the Technologies that were the most intuitive to me and had the most opportunity for me to grow.
        FrontEnd Tech Degree from Team Treehouse {' '}
         Currently Attending MongoDB University{' '}</code>
        </p>

        <div className={styles.pic}> 
        <a href="https://www.linkedin.com/in/jnuttlovedisciple/">
        <Image
          src="/undraw_hacker_mind_-6-y85.svg"
          alt="Hero Image"
          height={400}
          width={900}
          className={styles.image}
        />

        </a>
        </div>

        <p className={styles.description}>
        <code className={styles.code}>I utilize vercel with github to seemlessly publish & deploy projects.{' '}
        Here are a few things I have built for Small Businesses & side projects.{' '}
        How can I best utilize my skill set & help your company to succeed{' '}</code>
        </p>

<hr />



        <h1 className="text-3xl ml-10 mr-10 mb-20 mt-20 font-serif font-bold ">
      
      PROJECTS
         
        </h1>



        <div className={styles.grid}>

       
        <a href="https://hlsm.us" className={styles.card}>
            <h2>HLSM Land Surveying</h2>
            <Image
          src="/hlsm.jpg"
          alt="Hero Image"
          layout="responsive"
          height={200}
          width={200}
          className="absolute bz-0 rounded-2xl p-8"
        />
         <p>A Website that I built for a Central Florida Land Survey Company made with Domain.com CMS</p>
          
          
          </a>



        <a href="https://the-holy-bible.vercel.app/" className={styles.card}>
            <h2>The Holy Bible New Testament</h2>
            <Image
          src="/bible_short.jpg"
          alt="Hero Image"
          layout="responsive"
          height={200}
          width={200}
          className="absolute bz-0 rounded-2xl p-8"
        />
         <p>A digital writing and publication of the Holy Word of God. Animated by Me.</p>
          
          
          </a>
        


        <a href="https://waggin-rights.vercel.app/" className={styles.card}>
            <h2>Welcome to Waggin Rights</h2>
            <Image
          src="/waginnrights.jpg"
          alt="Hero Image"
          layout="responsive"
          height={200}
          width={200}
          className="absolute bz-0 rounded-2xl p-8"
        />
         <p>A small business site for Pet Sitting. Also built with Next.js and Tailwindcss</p>
          
          
          </a>
        

        
          

         

          <a href="https://company-of-the-winter-dnd.vercel.app/" className={styles.card}>
            <h2> Character Examples App</h2>
            <Image className={styles.card}
          src="/character_app.jpg"
          alt="Hero Image"
          layout="responsive"
          height={200}
          width={200}
          
        />
            <p>MongoDB & Next.js site that pulls Character examples data from cloud Atlas cluster.</p>
          </a>

          <a href="https://jnutt367.github.io/Stefanos/" className={styles.card}>
            <h2>Stefanos Trattoria Italian Cuisine</h2>
            <Image
          src="/stefanos_site.jpg"
          alt="Hero Image"
          layout="responsive"
          height={200}
          width={200}
          className="absolute bz-0 rounded-2xl p-8"
        />
         <p>A remake of my former employers website. An Italian  Family Restaurant & Bar</p>
          
          
          </a>




          <a
            href="https://estore-swart.vercel.app/"
            className={styles.card}
          >
            <h2>An E-Commerce Example</h2>
            <Image
          src="/technutt.jpg"
          alt="Hero Image"
          layout="responsive"
          height={200}
          width={200}
          className="absolute bz-0 rounded-2xl"
        />
            <p>TechNutt is an E-Commerce tech store built with Next.js & MongoDB Realm</p>
          </a>
         
        
       
     </div>
      </main>
      <div className={styles.footer}>
          <div className={styles.pic}> 
        <a href="https://www.linkedin.com/in/jnuttlovedisciple/">
        <Image
          src="/undraw_feeling_proud_qne1.svg"
          alt="Hero Image"
          height={400}
          width={900}
          className={styles.image}
        />

        </a>
    
        </div>

       
        </div>

      
        <div className={styles.main1}>
        <h1 className="text-3xl ml-10 mr-10 mb-20 mt-20 font-serif font-bold ">
      
      EDUCATION
         
        </h1>
        <a
            href="https://teamtreehouse.com/profiles/jdnutt"
            className={styles.card}
          >
            <h2>Team Treehouse Credentials</h2>
            <Image
          src="/treehouse.jpg"
          alt="Hero Image"
          layout="responsive"
          height={200}
          width={200}
          className="absolute bz-0 rounded-2xl"
        />
            <p>
              These are the Treehouse courses I took to earn my Frontend Tech Degree & More ...
            </p>
          </a>
          </div>
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
