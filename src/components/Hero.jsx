import { motion } from 'framer-motion'
import { GoogleLogo, Star, StarHalf } from '@phosphor-icons/react'
import Button from './Button'
import GradientBackground from './GradientBackground'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <GradientBackground />

      <div className={styles.container}>
        <motion.div 
          className={styles.content}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.badge}>
            <span className={styles.badgeNumber}>200K+</span>
            <span className={styles.badgeText}>Projects Managed Daily with Prismo</span>
          </div>

          <div className={styles.textContent}>
            <h1 className={styles.title}>
              Task Management Made Simple and Powerful
            </h1>
            <p className={styles.subtitle}>
              Boost productivity with seamless task and team management.
            </p>
          </div>

          <div className={styles.cta}>
            <Button to="/waitlist" size="large">
              Join Waitlist
            </Button>
            
            <div className={styles.rating}>
              <div className={styles.stars}>
                <GoogleLogo size={18} weight="bold" />
                <Star size={14} weight="fill" />
                <Star size={14} weight="fill" />
                <Star size={14} weight="fill" />
                <Star size={14} weight="fill" />
                <StarHalf size={14} weight="fill" />
              </div>
              <div className={styles.divider} />
              <span className={styles.ratingText}>4.9 rating Based on 300k Users</span>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className={styles.imageContainer}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className={styles.imageWrapper}>
            <img 
              src="https://framerusercontent.com/images/BesZqi2DRImbj4FXrPED12W5zA.png" 
              alt="Prismo Dashboard"
              className={styles.dashboardImage}
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
