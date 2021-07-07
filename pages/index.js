import Head from 'next/head'
import Image from 'next/image'
import logo from '../public/logo.png'
import storelogo from '../public/appstorelogo.png'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className = {styles.container}
    >
        <Head>
          <title>Songs we Share</title>
          <meta name="description" content="For Songs we Share" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

      <div className = {styles.navDiv}
      >
        <div className = {styles.navTitleBlock}
        >
          <h1 className = {styles.navbarTitle}>
            Songs we Share
          </h1>
        </div>
      </div>
      <div className ={styles.firstTextBox}>
        <h2 className = {styles.firstText}>
        Find common songs between friends. 
        </h2>
      </div>
      <div style = {{
        display: "flex",
        justifyContent: "center",
        borderRadius: "50%",
        borderWidth: 10,
      }
      }>
          <Image 
          src = {logo}
          alt = 'logo'
          height = {150}
          width = {150}
          quality = {100}
          className = {styles.logoWrapper}
          />
        </div>
        <div className ={styles.firstTextBox}>
          <h2 className = {styles.secondText}>
          Songs we Share lets you and your friends connect your 
          Spotify or Apple Music accounts and then scans 
          your playlists.
          </h2>
        </div>
        <div className ={styles.firstTextBox}>
          <h2 className = {styles.secondText}>
          Then, Songs we Share recommends the most
          common songs and allows you to play it 
          directly from the app!
          </h2>
        </div>

        <div className ={styles.firstTextBox}>
          <h2 className = {styles.secondText}>
          Download on the app store today! 
          </h2>
        </div>
      <div style = {{
        display: "flex",
        justifyContent: "center",
        borderRadius: "50%",
        borderWidth: 10,
      }
      }>
        <a href = "https://apps.apple.com/us/app/tunedune/id1525288136">
        <Image 
          src = {storelogo}
          alt = 'logo'
          height = {60}
          width = {180}
          quality = {100}
          className = {styles.storeLogoWrapper}
          />
        </a>
      </div>
      <div style = {{
        height : 80
      }}/>
    </div>
  )
}
