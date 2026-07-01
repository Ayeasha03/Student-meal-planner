import Link from 'next/link'
import Image from 'next/image'
import classes from './page.module.css'
import MainHeader from '@/components/main-header'

export default function Home() {
  return (
    <>
    <MainHeader />
    <main className={classes}>
      <section className={classes.hero}>
      <div className={classes.heroContent}>
        
          <p className={classes.tagline}>Good Food. Good Mood. Good Grades.</p>
        
      <h1 className= {classes.heroTitle}>
        Eat Well on a <br/><span>Student Budget</span>
        </h1>
        <p className={classes.heroDescription}>Discover affordable, delicious and easy meals made for students</p>
          <Link href="/meals" className={classes.heroButton}>Browse Meals → </Link>
          </div>
          <div className={classes.heroImage}>
            <Image src="/images/hero-rice.png" alt='Delicious student meal' width={550} height={550} loading='eager'/>
          </div>
          </section>
          <section className={classes.features}>
            <h3 className={classes.featureHeading} >Why use Student Meal Planner ?</h3>
            <div className={classes.featureGrid}>
              <div className={classes.featureCard}>
                <Image src='/images/wallet.png'  alt='wallet' width={24} height={24}className={classes.featureImage}/>
                <div className={classes.feature}></div>
                <h4 className={classes.featureTitle}>Affordable</h4>
                <p className={classes.featureDescription}>Meals that won't break your budget</p>                
              </div>
              <div className={classes.featureCard}>
                <Image src='/images/clock.png' alt='clock' width={24} height={24} className={classes.featureImage}/>
                <h4 className={classes.featureTitle}>Quick & Easy</h4>
                <p className={classes.featureDescription}>Simple meals you can prepare anywhere</p>
              </div>
              <div className={classes.featureCard}>
                <Image src='/images/favorite.png' alt='favourite' width={24} height={24} className={classes.featureImage} />
                <h4 className={classes.featureTitle}>Student Friendly</h4>
                <p className={classes.featureDescription}>Perfect for busy student life</p>
              </div>
            </div>
          </section>
        </main>
        </>
  )
}
